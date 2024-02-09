export const countLetters = (...letters: string[]): { [letter: string]: number } => {
  const count: { [letter: string]: number } = {}

  for (const letter of letters) {
    if (count[letter]) {
      count[letter]++
    } else {
      count[letter] = 1
    }
  }

  return count
}