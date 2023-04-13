import {validateStackSequences} from '../script'

describe('20. Valid Parentheses', (): void => {
    it('Valid. Empty', (): void => {
        expect(validateStackSequences([], [])).toBe(true);
    });

    it('Valid', (): void => {
        expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true);
    });

    it('Invalid Valid', (): void => {
        expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(false);
    });
})