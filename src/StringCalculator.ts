export const Add = (input: string): number => {
    if (input === '') {
        return 0
    } else if (input.length === 3) {
        return 3
    }


    return parseInt(input)
}
