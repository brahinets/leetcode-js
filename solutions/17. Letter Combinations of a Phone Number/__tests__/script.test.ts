import {letterCombinations} from '../script'

describe('17. Letter Combinations of a Phone Number', (): void => {
    it('Unsupported character', (): void => {
        expect(() => letterCombinations("abc"))
            .toThrowError("Unsupported digit");
    });
})
