import { isPalindrome } from "./palindrome"

describe('Test para determinar qué palabras son palíndromo', () => {
    it('La palabra "narran" debería ser un palíndromo', () => {
        expect(isPalindrome('narran')).toBe(true)
    })

    it('La palabra "reloj" no debería ser un palíndromo', () => {
        expect(isPalindrome('reloj')).toBe(false)
    })

    it('La palabra "somos" debería ser un palíndromo', () => {
        expect(isPalindrome('somos')).toBe(true)
    })

    it('Un conjunto de palabras también puede formar un palíndromo', () => {
        expect(isPalindrome('anita lava la tina')).toBe(true)
    })
})