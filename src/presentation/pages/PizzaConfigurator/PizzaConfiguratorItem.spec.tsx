import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import faker from 'faker'
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

const makeProps = (): PizzaConfiguratorItemProps => {
  const values = [faker.random.words(2)]
  for (let i = 0; i < faker.datatype.number(5); i++) {
    values.push(faker.random.words(2))
  }
  return {
    title: faker.random.words(3),
    name: faker.database.column(),
    values
  }
}

describe('PizzaConfiguratorItem', () => {
  test('Should render radio inputs without type in the props', () => {
    const { wrapper } = makeSut(makeProps())
    const input = wrapper.querySelector('input[type="radio"]')
    expect(input).toBeTruthy()
  })

  test('Should render checkbox inputs with type=multiply in the props', () => {
    const props = makeProps()
    props.type = 'multiply'
    const { wrapper } = makeSut(props)
    const input = wrapper.querySelector('input[type="checkbox"]')
    expect(input).toBeTruthy()
  })
})
