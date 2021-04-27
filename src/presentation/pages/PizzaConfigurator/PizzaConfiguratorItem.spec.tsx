import React from 'react'
import { render } from '@testing-library/react'
import { PizzaConfiguratorItem, PizzaConfiguratorItemProps } from './PizzaConfiguratorItem'

describe('PizzaConfiguratorItem', () => {
  test('Should render radio inputs without type in the props', () => {
    const props: PizzaConfiguratorItemProps = {
      title: 'any_title',
      name: 'any_name',
      values: ['any_value1', 'any_value2']
    }
    const sut = render(<PizzaConfiguratorItem {...props} />)
    const wrapper = sut.getByTestId('pizza-configurator-item-wrapper')
    const inputs = wrapper.querySelectorAll('input[type="radio"]')
    expect(inputs.length).toBe(props.values.length)
  })
})
