import {nextGreatestLetter} from '../script'

describe('744. Find Smallest Letter Greater Than Target', (): void => {
    it('Lexicographically greater than char not in array', (): void => {
        expect(nextGreatestLetter(["c", "f", "j"], "a"))
            .toBe("c");
    });

    it('Lexicographically greater than char in array', (): void => {
        expect(nextGreatestLetter(["c", "f", "j"], "c"))
            .toBe("f");
    });

    it('No greater', (): void => {
        expect(nextGreatestLetter(["x", "x", "y", "y"], "z"))
            .toBe("x");
    });
});
