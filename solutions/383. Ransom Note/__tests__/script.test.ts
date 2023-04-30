import {canConstruct} from '../script'

describe('383. Ransom Note', (): void => {
    it('No required letters at all', (): void => {
        expect(canConstruct("a", "b"))
            .toBe(false);
    });

    it('No some required letters', (): void => {
        expect(canConstruct("aa", "ab"))
            .toBe(false);
    });

    it('Enough required letters', (): void => {
        expect(canConstruct("aa", "aab"))
            .toBe(true);
    });
});

