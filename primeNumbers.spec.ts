import { isPrimeNumber } from "./primeNumbers"

describe('test para verificar números primos', () => {
    it('devuelve true para números primos', () => {
      
      expect(isPrimeNumber(7)).toBe(true)
      expect(isPrimeNumber(11)).toBe(true)
      
    })
  
    it('devuelve false para números no primos', () => {
      expect(isPrimeNumber(0)).toBe(false)
      expect(isPrimeNumber(1)).toBe(false)
      expect(isPrimeNumber(4)).toBe(false)
     
    })
  
    it('devuelve false para números negativos', () => {
      expect(isPrimeNumber(-2)).toBe(false)
     
      })
  })