import {removeStars} from '../script'

describe('2390. Removing Stars From a String', (): void => {
    it('Removes nothing', (): void => {
        expect(removeStars("abc"))
            .toBe("abc");
    });

    it('Removes some', (): void => {
        expect(removeStars("leet**cod*e"))
            .toBe("lecoe");
    });

    it('Removes all', (): void => {
        expect(removeStars("erase*****"))
            .toBe("");
    });
})

