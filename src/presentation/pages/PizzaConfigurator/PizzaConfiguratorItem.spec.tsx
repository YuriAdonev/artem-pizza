import React from 'react'
import { render, RenderResult, cleanup, fireEvent } from '@testing-library/react'
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
  const values = [faker.random.words(2), faker.random.words(2)]
  for (let i = 0; i < faker.datatype.number(5); i++) {
    values.push(faker.random.words(2))
  }
  return {
    title: faker.random.words(3),
    name: faker.database.column(),
    values,
    selected: [],
    onChangeSelected: () => {}
  }
}

describe('PizzaConfiguratorItem', () => {
  afterEach(cleanup)

  test('Should render correct title', () => {
    const props = makeProps()
    const { sut } = makeSut(props)
    const title = sut.getByTestId('pizza-configurator-item-title')
    expect(title.textContent).toBe(props.title)
  })

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

  test('Should render correct value in labels', () => {
    const props = makeProps()
    const { wrapper } = makeSut(props)
    const labels = wrapper.querySelectorAll('label')
    const values = []
    labels.forEach(item => {
      values.push(item.querySelector('span').textContent)
    })
    expect(values).toEqual(props.values)
  })

  test('Should render correct name in inputs', () => {
    const props = makeProps()
    const { wrapper } = makeSut(props)
    const inputName = wrapper.querySelector('input').getAttribute('name')
    expect(inputName).toBe(props.name)
  })

  test('Should set checked status to correct radio input', () => {
    const props = makeProps()
    const checkedIndex = faker.datatype.number(props.values.length - 1)
    props.selected = props.values[checkedIndex]
    const checkedStatusList = props.values.map(item => item === props.selected)
    const { wrapper } = makeSut(props)
    const inputs = wrapper.querySelectorAll('input[type="radio"]')
    if (inputs) {
      const inputStatusList = Array.from(inputs).map(item => item.getAttribute('checked') !== null)
      expect(checkedStatusList).toEqual(inputStatusList)
    }
  })

  test('Should set checked status to correct checkbox input', () => {
    const props = makeProps()
    props.type = 'multiply'
    const checkedIndex = faker.datatype.number(props.values.length - 1)
    const checkedValue = props.values[checkedIndex]
    props.selected = []
    props.selected.push(checkedValue)
    const checkedStatusList = props.values.map(item => props.selected.includes(item))
    const { wrapper } = makeSut(props)
    const inputs = wrapper.querySelectorAll('input[type="checkbox"]')
    if (inputs) {
      const inputStatusList = Array.from(inputs).map(item => item.getAttribute('checked') !== null)
      expect(checkedStatusList).toEqual(inputStatusList)
    }
  })

  test('Should call onChangeSelected with correct value on click on radio input', () => {
    const props = makeProps()
    props.values = ['any_value1', 'any_value2', 'any_value3']
    props.selected = 'any_value1'
    jest.spyOn(props, 'onChangeSelected').mockImplementationOnce(() => {})
    const { wrapper } = makeSut(props)
    fireEvent.click(wrapper.querySelectorAll('input[type="radio"]')[1], {})
    expect(props.onChangeSelected).toBeCalledWith(props.type, props.name, 'any_value2')
  })
})
