import {Add} from './StringCalculator'

describe('String Calculator', () => {
    it('result should be 0 when empty entry', () => {
        expect(Add('')).toBe(0)
    })

    it.each([['1', 1], ['2', 2], ['3', 3]])('result should be the same number when input is only one number', (input: string, expectedResult: number) => {
        expect(Add(input)).toBe(expectedResult)
    })

    it.each([["1,2", 3], ["1,1", 2], ["4,5", 9]])('result should be the sum of two numbers', (input:string , expectedResult: number) => {
        expect(Add(input)).toBe(expectedResult)
    })

    it.each([['1,2,3', 6], ['4,5,6', 15], ['10,15,20', 45] ])('should sum all numbers in the input', (input:string , expectedResult: number) => {
        expect(Add(input)).toBe(expectedResult)
    })

    it.each([['1\n2,3', 6] ])('should sum all numbers in the input when \n as separator', (input:string , expectedResult: number) => {
        expect(Add(input)).toBe(expectedResult)
    })
})
