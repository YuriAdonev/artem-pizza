import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { PizzaConfiguratorItem, PizzaConfiguratorItemProps } from './PizzaConfiguratorItem'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (props: PizzaConfiguratorItemProps): SutTypes => {
  const sut = render(<PizzaConfiguratorItem {...props} />)
  return {
    sut
  }
}

describe('PizzaConfiguratorItem', () => {
  test('Should render radio inputs without type in the props', () => {
    const props = {
      title: 'any_title',
      name: 'any_name',
      values: ['any_value1', 'any_value2']
    }
    const { sut } = makeSut(props)
    const wrapper = sut.getByTestId('pizza-configurator-item-wrapper')
    const inputs = wrapper.querySelectorAll('input[type="radio"]')
    expect(inputs.length).toBe(props.values.length)
  })
})
