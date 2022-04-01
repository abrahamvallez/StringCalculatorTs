export const Add = (input: string): number => {
    if (input === '') {
        return 0
    } else if (input.length === 1) {
        return parseInt(input)
    }

    const numbers = input.split(/,|\n/)
    return numbers.reduce((sum, currentNumber) => sum + parseInt(currentNumber), 0)
}
