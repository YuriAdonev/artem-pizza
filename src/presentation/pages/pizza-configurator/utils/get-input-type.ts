export const getInputType = (type: string): string => {
  if (type === 'multiply') {
    return 'checkbox'
  }
  return 'radio'
}
