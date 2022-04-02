import { isRegExp } from 'util'
import {Add} from './StringCalculator'

describe('String Calculator', () => {
    it('result should be 0 when empty entry', () => {
        expect(Add('')).toBe(0)
    })

    it.each([['1', 1], ['2', 2], ['3', 3]])('result should be the same number when input is only one number', (input: string, expectedResult: number) => {
        expect(Add(input)).toBe(expectedResult)
    })

    it.each([['-1', '-1'], ['1,-2,3', '-2'], ['-4\n5,-6', '-4,-6'], ['//;\n4;5;-6', '-6']])('should not allow negative numbers', (input: string, messageExpected: string) => {
        expect(() => Add(input)).toThrowError('negatives not allowed: ' + messageExpected)
    })

    describe('should sum all numbers in the input', () => {
        it.each([["1,2", 3], ["1,1", 2], ["4,5", 9]])('when input has two numbers', (input:string , expectedResult: number) => {
            expect(Add(input)).toBe(expectedResult)
        })
    
        it.each([['1,2,3', 6], ['4,5,6', 15], ['10,15,20', 45] ])('when input has more than two numbers', (input:string , expectedResult: number) => {
            expect(Add(input)).toBe(expectedResult)
        })
    })

    describe('should sum numbers with different separators', () => {
        it.each([['1\n2\n3', 6], ['4\n5,6', 15], ['10\n15\n20', 45]])('when separator is \\n', (input:string , expectedResult: number) => {
            expect(Add(input)).toBe(expectedResult)
        })

        it.each([['//;\n1;2', 6], ['//;\n4;5;6', 15], ['//()\n10()15()20', 45]])('when separator is custom', () => {
        expect(Add('//;\n1;2')).toBe(3)
        })
    })
})
