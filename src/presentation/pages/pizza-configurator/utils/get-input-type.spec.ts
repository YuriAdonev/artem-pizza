import { getInputType } from './get-input-type'

describe('Utils - getInputType', () => {
  test('Should return radio as default', () => {
    expect(getInputType('any_type')).toBe('radio')
  })
})
