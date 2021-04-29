import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { pizzaConfiguratorFields } from './config'
import { PizzaConfigurator } from './PizzaConfigurator'

const makeSut = (): RenderResult => render(<PizzaConfigurator />)

describe('PizzaConfigurator', () => {
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
})
