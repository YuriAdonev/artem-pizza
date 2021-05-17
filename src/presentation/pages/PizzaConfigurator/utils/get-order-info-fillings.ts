import { StateTypes } from '../config'

export const getOrderInfoFillings = (state: StateTypes): string => {
  const fillings = [...state.cheese, ...state.vegetables, ...state.meat].map(filling => ' ' + filling)
  return `${state.sauce} соус${fillings.length ? ',' + fillings.toString() : ''}`
}
