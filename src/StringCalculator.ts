export const Add = (input: string): number => {
    let separatorRegex: RegExp = /,|\n/
    let numbers:string[] = []
    

    if (input === '') {
        return 0
    } else if (input.length === 1) {
        return parseInt(input)
    } else if(input.startsWith('//')) {
        separatorRegex = new RegExp(input.substring(2, input.indexOf('\n')))
        input = input.substring(input.indexOf('\n') + 1)
    }

    numbers = input.split(separatorRegex)

    let negatives: string[] = numbers.filter(n => parseInt(n) < 0)
    if(negatives.length > 0) {
        throw new Error('negatives not allowed: ' + negatives.join(','))
    }
    return numbers.reduce((sum, currentNumber) => sum + parseInt(currentNumber), 0)
}
