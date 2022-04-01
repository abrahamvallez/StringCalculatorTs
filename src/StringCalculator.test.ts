import {Add} from './StringCalculator';

describe('String Calculator', () => {
    it('should be result 0 when empty entry', () => {
        const result = Add('')
        expect(result).toBe(0)
    });
})