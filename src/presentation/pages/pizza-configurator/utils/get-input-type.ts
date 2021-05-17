export const getInputType = (type: string): string => {
  if (type === 'multiple') {
    return 'checkbox'
  }
  return 'radio'
}
