import { sumArray } from "./sum"

describe ('test para determinar la suma de los números dentro de un array', () => {
    it('debería devolver 0 si se proporciona un arreglo vacío', () => {
        const input: number[] = []
        const result = sumArray(input)
        expect(result).toBe(0)
      })
      
    
      it('debería devolver la suma correcta cuando se proporciona un arreglo de números', () => {
        const input = [1, 2, 3, 4]
        const result = sumArray(input)
        expect(result).toBe(10)

        
})})