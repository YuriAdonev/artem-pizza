import React from 'react'
import { render, RenderResult, cleanup, fireEvent } from '@testing-library/react'
import { fields, initialState, prices } from './config'
import { PizzaConfigurator } from './pizza-configurator'

const makeSut = (): RenderResult => render(<PizzaConfigurator />)

const getRenderedPizzaConfiguration = (element: HTMLElement): object => {
  const result = {}
  fields.forEach(field => {
    const inputs = element.querySelectorAll<HTMLInputElement>(`input[name="${field.name}"]`)
    const checkedInputs = []
    inputs.forEach(input => input.checked && checkedInputs.push(input.value))
    if (field.type === 'single') {
      expect(checkedInputs.length).toBe(1)
      result[field.name] = checkedInputs[0]
    }
    if (field.type === 'multiply') {
      result[field.name] = checkedInputs
    }
  })
  return result
}

const clickOnInputByValue = (wrapper: HTMLElement, value: string): void => {
  fireEvent.click(wrapper.querySelector(`input[value="${value}"]`))
}

const testButtonText = (sut: RenderResult, price: string): void => {
  const button = sut.getByTestId('pizza-configurator-submit')
  expect(button.textContent).toBe(`Заказать за ${price} руб`)
}

describe('PizzaConfigurator', () => {
  afterEach(cleanup)

  test('Should render all form fields', () => {
    const sut = makeSut()
    const fieldsWrapper = sut.getByTestId('pizza-configurator-fields')
    fields.forEach(field => {
      field.values.forEach(value => {
        const input = fieldsWrapper.querySelector(`input[name="${field.name}"][value="${value}"]`)
        expect(input).toBeTruthy()
      })
    })
  })

  test('Should render with initialState on start', () => {
    const sut = makeSut()
    const fieldsWrapper = sut.getByTestId('pizza-configurator-fields')
    expect(getRenderedPizzaConfiguration(fieldsWrapper)).toEqual(initialState)
  })

  test('Should update state on change inputs', () => {
    const sut = makeSut()
    const fieldsWrapper = sut.getByTestId('pizza-configurator-fields')
    clickOnInputByValue(fieldsWrapper, '35 см')
    clickOnInputByValue(fieldsWrapper, 'моцарелла')
    clickOnInputByValue(fieldsWrapper, 'моцарелла')
    clickOnInputByValue(fieldsWrapper, 'чеддер')
    clickOnInputByValue(fieldsWrapper, 'дор блю')
    const state = { ...initialState, size: '35 см', cheese: ['чеддер', 'дор блю'] }
    expect(getRenderedPizzaConfiguration(fieldsWrapper)).toEqual(state)
  })

  test('Should show base price on start', () => {
    testButtonText(makeSut(), prices.base.toString())
  })

  test('Should show correct price on change inputs', () => {
    const sut = makeSut()
    const fieldsWrapper = sut.getByTestId('pizza-configurator-fields')
    clickOnInputByValue(fieldsWrapper, '35 см')
    testButtonText(sut, String(prices.base + prices.bigSize))
    clickOnInputByValue(fieldsWrapper, 'моцарелла')
    testButtonText(sut, String(prices.base + prices.bigSize + prices.filling))
    clickOnInputByValue(fieldsWrapper, 'моцарелла')
    testButtonText(sut, String(prices.base + prices.bigSize))
    clickOnInputByValue(fieldsWrapper, 'чеддер')
    clickOnInputByValue(fieldsWrapper, 'дор блю')
    clickOnInputByValue(fieldsWrapper, '30 см')
    testButtonText(sut, String(prices.base + prices.filling + prices.filling))
  })

  test('Should dont render order info on start', () => {
    const sut = makeSut()
    const orderInfo = sut.getByTestId('pizza-configurator-order-info')
    expect(orderInfo.childElementCount).toBe(0)
  })

  test('Should render order info on submit form', () => {
    const sut = makeSut()
    const button = sut.getByTestId('pizza-configurator-submit')
    fireEvent.click(button)
    const orderInfo = sut.getByTestId('pizza-configurator-order-info')
    expect(orderInfo.childElementCount).toBe(4)
  })

  test('Should render correct order info content on submit form', () => {
    const sut = makeSut()
    const fieldsWrapper = sut.getByTestId('pizza-configurator-fields')
    clickOnInputByValue(fieldsWrapper, 'моцарелла')
    clickOnInputByValue(fieldsWrapper, 'помидор')
    clickOnInputByValue(fieldsWrapper, 'перец')
    clickOnInputByValue(fieldsWrapper, 'пепперони')
    const button = sut.getByTestId('pizza-configurator-submit')
    fireEvent.click(button)
    const baseText = sut.getByTestId('pizza-configurator-order-info-base')
    const fillingsText = sut.getByTestId('pizza-configurator-order-info-fillings')
    const priceText = sut.getByTestId('pizza-configurator-order-info-price')
    expect(baseText.textContent).toBe('30 см, Пышное тесто')
    expect(fillingsText.textContent).toBe('Томатный соус, моцарелла, помидор, перец, пепперони')
    expect(priceText.textContent).toBe('Цена 316 руб')
  })
})
