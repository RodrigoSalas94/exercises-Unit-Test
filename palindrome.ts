export const isPalindrome = (word: string): boolean => {
    
    const palindrome = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
    
    
    return palindrome === palindrome.split('').reverse().join('')
}

