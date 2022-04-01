export const Add = (input: string): number => {
    let separatorRegex: RegExp = /,|\n/
    let numbers:string[] = []
    
    if(parseInt(input) < 0) {
        throw new Error('negatives not allowed: ' + input)
    } else if (input === '') {
        return 0
    } else if (input.length === 1) {
        return parseInt(input)
    } else if(input.startsWith('//')) {
        separatorRegex = new RegExp(input.substring(2, input.indexOf('\n')))
        input = input.substring(input.indexOf('\n') + 1)
    }

    numbers = input.split(separatorRegex)
    return numbers.reduce((sum, currentNumber) => sum + parseInt(currentNumber), 0)
}
