import { getChecked } from './get-checked'

describe('Utils - getChecked', () => {
  test('Should return false on default', () => {
    expect(getChecked({ type: '', value: '', selected: '' })).toBeFalsy()
  })
})
