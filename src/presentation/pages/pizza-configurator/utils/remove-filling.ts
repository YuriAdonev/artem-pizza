export const removeFilling = (arr: string[], filling: string): string[] => {
  return arr.filter((item: string) => item !== filling)
}
