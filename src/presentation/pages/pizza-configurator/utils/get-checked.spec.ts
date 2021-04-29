import { getChecked } from './get-checked'

describe('Utils - getChecked', () => {
  test('Should return false on default', () => {
    expect(getChecked({ type: '', value: '', selected: '' })).toBeFalsy()
  })

  test('Should return false if value not includes in selected on type multiply', () => {
    expect(getChecked({ type: 'multiply', value: 'current_value', selected: ['any_value'] })).toBeFalsy()
  })
})