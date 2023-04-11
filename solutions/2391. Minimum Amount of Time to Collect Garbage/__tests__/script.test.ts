import {garbageCollection} from '../script'

describe('2391. Minimum Amount of Time to Collect Garbage', (): void => {
    it('Less garbage', (): void => {
        expect(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3]))
            .toBe(21);
    });

    it('More garbage', (): void => {
        expect(garbageCollection(["MMM", "PGM", "GP"], [3, 10]))
            .toBe(37);
    });
})
