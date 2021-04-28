import React from 'react'
import { render } from '@testing-library/react'
import { pizzaConfiguratorFields } from './config'
import { PizzaConfigurator } from './PizzaConfigurator'

describe('PizzaConfigurator', () => {
  test('Should render all form fields', () => {
    const sut = render(<PizzaConfigurator />)
    const fieldsWrapper = sut.getByTestId('pizza-configurator-fields')
    pizzaConfiguratorFields.forEach(field => {
      field.values.forEach(value => {
        const input = fieldsWrapper.querySelector(`input[name="${field.name}"][value="${value}"]`)
        expect(input).toBeTruthy()
      })
    })
  })
})
