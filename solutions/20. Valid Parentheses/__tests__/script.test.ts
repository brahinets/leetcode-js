import {isValid} from '../script'

describe('20. Valid Parentheses', (): void => {
    it('Valid simple', (): void => {
        expect(isValid("()")).toBe(true);
    });

    it('Valid sequential', (): void => {
        expect(isValid("()[]{}")).toBe(true);
    });

    it('Valid inner', (): void => {
        expect(isValid("([{}])")).toBe(true);
    });

    it('Invalid', (): void => {
        expect(isValid("(]")).toBe(false);
    });

    it('Illegal characters', (): void => {
        expect(() => isValid("abc"))
            .toThrowError("Illegal character");
    });
})
