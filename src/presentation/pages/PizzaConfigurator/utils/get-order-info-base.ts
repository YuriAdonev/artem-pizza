import { StateTypes } from '../config'

export const getOrderInfoBase = (state: StateTypes): string => {
  return `${state.size}, ${state.dough} тесто`
}
