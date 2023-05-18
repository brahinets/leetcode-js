import {myAtoi} from '../script'

describe('8. String to Integer (atoi)', (): void => {
    it('Parse positive', (): void => {
        expect(myAtoi("42")).toBe(42);
    });

    it('Parse negative', (): void => {
        expect(myAtoi("-42")).toBe(-42);
    });

    it('Ignore non digits', (): void => {
        expect(myAtoi("   4193 with words")).toBe(4193);
    });
})