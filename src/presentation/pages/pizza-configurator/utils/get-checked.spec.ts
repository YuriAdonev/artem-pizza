import { getChecked } from './get-checked'

describe('Utils - getChecked', () => {
  test('Should return false on default', () => {
    expect(getChecked({ type: '', value: '', selected: '' })).toBeFalsy()
  })

  test('Should return false if value not includes in selected on type multiply', () => {
    expect(getChecked({ type: 'multiply', value: 'current_value', selected: ['any_value'] })).toBe(false)
  })

  test('Should return true if value includes in selected on type multiply', () => {
    expect(getChecked({ type: 'multiply', value: 'current_value', selected: ['current_value'] })).toBe(true)
  })

  test('Should return false if value not equal selected on type single', () => {
    expect(getChecked({ type: 'single', value: 'current_value', selected: 'any_value' })).toBe(false)
  })

  test('Should return true if value equal selected on type single', () => {
    expect(getChecked({ type: 'single', value: 'current_value', selected: 'current_value' })).toBe(true)
  })
})
