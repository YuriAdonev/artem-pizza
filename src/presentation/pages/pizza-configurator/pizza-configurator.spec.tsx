import React from 'react'
import { render, RenderResult, cleanup, fireEvent } from '@testing-library/react'
import { fields, initialState } from './config'
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
    fireEvent.click(fieldsWrapper.querySelector('input[value="35 см"]'))
    fireEvent.click(fieldsWrapper.querySelector('input[value="моцарелла"]'))
    fireEvent.click(fieldsWrapper.querySelector('input[value="моцарелла"]'))
    fireEvent.click(fieldsWrapper.querySelector('input[value="чеддер"]'))
    fireEvent.click(fieldsWrapper.querySelector('input[value="дор блю"]'))
    const state = { ...initialState, size: '35 см', cheese: ['чеддер', 'дор блю'] }
    expect(getRenderedPizzaConfiguration(fieldsWrapper)).toEqual(state)
  })
})
