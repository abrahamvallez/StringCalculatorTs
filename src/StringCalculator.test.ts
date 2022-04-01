import {Add} from './StringCalculator';

describe('String Calculator', () => {
    it('result should be 0 when empty entry', () => {
        expect(Add('')).toBe(0)
    })

    it('result should be 1 when input is 1', () => {
        expect(Add('1')).toBe(1)
    })
})