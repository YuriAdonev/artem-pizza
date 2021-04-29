export type StateTypes = {
  size: string
  dough: string
  sauce: string
  cheese: string[]
  vegetables: string[]
  meat: string[]
}

export const initialState: StateTypes = {
  size: '30 см',
  dough: 'Пышное',
  sauce: 'Томатный',
  cheese: [],
  vegetables: [],
  meat: []
}
