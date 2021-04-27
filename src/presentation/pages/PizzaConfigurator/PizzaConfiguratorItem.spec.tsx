import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { PizzaConfiguratorItem, PizzaConfiguratorItemProps } from './PizzaConfiguratorItem'

type SutTypes = {
  sut: RenderResult
  wrapper: HTMLElement
}

const makeSut = (props: PizzaConfiguratorItemProps): SutTypes => {
  const sut = render(<PizzaConfiguratorItem {...props} />)
  const wrapper = sut.getByTestId('pizza-configurator-item-wrapper')
  return {
    sut,
    wrapper
  }
}

describe('PizzaConfiguratorItem', () => {
  test('Should render radio inputs without type in the props', () => {
    const props = {
      title: 'any_title',
      name: 'any_name',
      values: ['any_value1', 'any_value2']
    }
    const { wrapper } = makeSut(props)
    const input = wrapper.querySelector('input[type="radio"]')
    expect(input).toBeTruthy()
  })
})
