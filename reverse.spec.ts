import { reverseWord } from "./reverse"

describe('test para determinar las palabras invertidas', () => {
    it('debe devolver la palabra invertida correctamente', () => {
      const word = 'perro'
      const reversedWord = reverseWord(word)
      expect(reversedWord).toBe('orrep')
    });
  
    it('debe devolver una cadena vacía si se proporciona una', () => {
      const word = ''
      const reversedWord = reverseWord(word)
      expect(reversedWord).toBe('')
    })})