import { countLetters } from "./letters"

describe('test para determinar el conteo de letras', () => {
  it('devuelve el recuento correcto de letras en un string', () => {
    const expectedOutput = { a: 3, b: 2, c: 1, d: 1 }

    const result = countLetters('a', 'b', 'a', 'c', 'd', 'a', 'b')

    expect(result).toEqual(expectedOutput)
  })

  it('devuelve un objeto vacío cuando se proporciona uno', () => {
    const input: string[] = []
    const expectedOutput = {}

    const result = countLetters(...input)

    expect(result).toEqual(expectedOutput)
  })

  it('devuelve el recuento correcto de letras cuando hay letras repetidas', () => {
  const expectedOutput = { a: 5, b: 4, c: 1, d: 1 }

    const result = countLetters('a','a', 'a','b','b', 'b','b', 'a', 'c', 'd', 'a')

    expect(result).toEqual(expectedOutput)
  })

  
it('devuelve un error cuando se proporcionan números', () => {
    const input: string = '12345'

    expect(() => countLetters(input)), Error('La entrada debe contener solo letras')
  })
})