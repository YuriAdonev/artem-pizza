type PropsTypes = {
  type: string
  value: string
  selected: string[] | string
}

export const getChecked = ({ type, value, selected }: PropsTypes): boolean => {
  if (type === 'single') {
    return value === selected
  }
  if (type === 'multiple') {
    return selected.includes(value)
  }
  return false
}
