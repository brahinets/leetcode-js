import {peakIndexInMountainArray} from '../script'

describe('852. Peak Index in a Mountain Array', (): void => {
    it('Peak on the middle', (): void => {
        expect(peakIndexInMountainArray([0, 1, 0]))
            .toBe(1);
    });

    it('Peak on the right', (): void => {
        expect(peakIndexInMountainArray([0, 1, 2, 0]))
            .toBe(2);
    });

    it('Peak on the left', (): void => {
        expect(peakIndexInMountainArray([0, 10, 5, 2]))
            .toBe(1);
    });
})
