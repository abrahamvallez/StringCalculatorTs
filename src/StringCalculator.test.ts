import {Add} from './StringCalculator'

describe('String Calculator', () => {
    it('result should be 0 when empty entry', () => {
        expect(Add('')).toBe(0)
    })

    it.each([['1', 1], ['2', 2], ['3', 3]])('result should be the same number when input is only one number', (input: string, expectedResult: number) => {
        expect(Add(input)).toBe(expectedResult)
    })

    it.each([["1,2", 3],["1,1", 2]])('result should be the sum of two numbers', (input:string , expectedResult: number) => {
        expect(Add(input)).toBe(expectedResult)
    })
})
