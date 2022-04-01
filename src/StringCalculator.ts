export const Add = (input: string): number => {
    let negatives:string[] = []
    let numbers = getNumberFromInput(input)

    negatives = numbers.filter(n => parseInt(n) < 0)
    if((numbers.filter(n => parseInt(n) < 0)).length > 0) {
        throw new Error('negatives not allowed: ' + negatives.join(','))
    }

    return numbers.reduce((sum, currentNumber) => sum + parseInt(currentNumber), 0)
}

const getNumberFromInput = (input: string): string[] => {
    let numbers: string[] = []

    if(input === '') {
        numbers = ['0']
    } else if (input.length === 1) {
        numbers = [input]
    } else if(input.startsWith('//')) {
        numbers = getNumbersWithCustomSeparator(input)
    } else {
        numbers = getNumbersWithDefaultSeparator(input)
    }

    return numbers
}

const getNumbersWithCustomSeparator = (input: string): string[] => {
    const separatorRegex: RegExp = new RegExp(input.substring(2, input.indexOf('\n')))
    return input.substring(input.indexOf('\n') + 1).split(separatorRegex)
}

const getNumbersWithDefaultSeparator = (input: string): string[] => {
    return input.split(/,|\n/)
}
