import React from 'react'
import { render, RenderResult, cleanup } from '@testing-library/react'
import { pizzaConfiguratorFields, pizzaConfiguratorInitialState } from './config'
import { PizzaConfigurator } from './PizzaConfigurator'

const makeSut = (): RenderResult => render(<PizzaConfigurator />)

describe('PizzaConfigurator', () => {
  afterEach(cleanup)

  test('Should render all form fields', () => {
    const sut = makeSut()
    const fieldsWrapper = sut.getByTestId('pizza-configurator-fields')
    pizzaConfiguratorFields.forEach(field => {
      field.values.forEach(value => {
        const input = fieldsWrapper.querySelector(`input[name="${field.name}"][value="${value}"]`)
        expect(input).toBeTruthy()
      })
    })
  })

  test('Should render with initialState on start', () => {
    const sut = makeSut()
    const fieldsWrapper = sut.getByTestId('pizza-configurator-fields')
    const configuration = {}
    pizzaConfiguratorFields.forEach(field => {
      const inputs = fieldsWrapper.querySelectorAll<HTMLInputElement>(`input[name="${field.name}"]`)
      const checkedInputs = []
      inputs.forEach(input => input.checked && checkedInputs.push(input.value))
      if (field.type === 'single') {
        expect(checkedInputs.length).toBe(1)
        configuration[field.name] = checkedInputs[0]
      }
      if (field.type === 'multiply') {
        configuration[field.name] = checkedInputs
      }
    })
    expect(configuration).toEqual(pizzaConfiguratorInitialState)
  })
})
