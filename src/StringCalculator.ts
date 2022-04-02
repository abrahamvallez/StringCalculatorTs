export const Add = (input: string): number => {
    let negatives:string[] = []
    let numbers = getNumbersFromInput(input)

    negatives = numbers.filter(n => parseInt(n) < 0)
    if((numbers.filter(n => parseInt(n) < 0)).length > 0) {
        throw new Error('negatives not allowed: ' + negatives.join(','))
    }

    return numbers.filter(n => parseInt(n) <= 1000).reduce((sum, currentNumber) => sum + parseInt(currentNumber), 0)
}

const getNumbersFromInput = (input: string): string[] => {
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
    const customSeparator = input.substring(2, input.indexOf('\n'))
    const separatorRegex = new RegExp(customSeparator.replace(/\]\[/, ']|['))
    return input.substring(input.indexOf('\n') + 1).split(separatorRegex)
}

const getNumbersWithDefaultSeparator = (input: string): string[] => {
    return input.split(/,|\n/)
}
