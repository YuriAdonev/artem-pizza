import { getInputType } from './get-input-type'

describe('Utils - getInputType', () => {
  test('Should return radio as default', () => {
    expect(getInputType('any_type')).toBe('radio')
  })

  test('Should return radio if type single', () => {
    expect(getInputType('single')).toBe('radio')
  })

  test('Should return checkbox if type multiply', () => {
    expect(getInputType('multiply')).toBe('checkbox')
  })
})
