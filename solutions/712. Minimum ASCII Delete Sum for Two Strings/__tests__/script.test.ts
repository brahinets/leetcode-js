import {minimumDeleteSum} from '../script'

describe('712. Minimum ASCII Delete Sum for Two Strings', (): void => {

    it('Remove nothing', (): void => {
        expect(minimumDeleteSum("sea", "sea"))
            .toBe(0);
    });

    it('Remove from ends', (): void => {
        expect(minimumDeleteSum("sea", "eat"))
            .toBe(231);
    });

    it('Remove from middle', (): void => {
        expect(minimumDeleteSum("delete", "leet"))
            .toBe(403);
    });

    it('Heavy case', (): void => {
        expect(minimumDeleteSum("dffkrytao", "cquhsbdemum"))
            .toBe(1952);
    });
})
