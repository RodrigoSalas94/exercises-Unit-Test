import { pairNumbers } from "./pairNumbers"

describe('test para determinar que numeros son pares dentro de un array', () => {
    it('debe devolver un array vacío si se proporciona uno', () => {
      const input: number[] = []
      const result = pairNumbers(input)
      expect(result).toEqual([])
    })
  
    it('debe devolver un array vacío si no hay números pares', () => {
      const input = [1, 3, 5, 7, 9]
      const result = pairNumbers(input)
      expect(result).toEqual([])
    })
  
    it('debe devolver un arreglo con los números pares del array', () => {
      const input = [1, 2, 3, 4, 5, 6]
      const result = pairNumbers(input)
      expect(result).toEqual([2, 4, 6])
    })})
  