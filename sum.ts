export const sumArray = (numbers: number[]) => {
    let sum = 0
    for (const num of numbers) {
        sum += num
    }
    return sum
}