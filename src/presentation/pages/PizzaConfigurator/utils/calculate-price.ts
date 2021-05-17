import { StateTypes, prices } from '../config'

export const calculatePrice = (state: StateTypes): number => {
  let result = prices.base
  if (state.size === '35 см') {
    result += prices.bigSize
  }
  [...state.cheese, ...state.meat, ...state.vegetables].forEach(() => {
    result += prices.filling
  })
  return result
}
