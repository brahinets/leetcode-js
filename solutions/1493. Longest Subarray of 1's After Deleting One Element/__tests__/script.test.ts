import {longestSubarray} from '../script'

describe('1493. Longest Subarray of 1\'s After Deleting One Element', (): void => {

    it('Zero', (): void => {
        expect(longestSubarray([0, 0, 0, 0]))
            .toBe(0);
    });

    it('All already but must delete one element', (): void => {
        expect(longestSubarray([1, 1, 1]))
            .toBe(2);
    });

    it('Keep all after remove one', (): void => {
        expect(longestSubarray([1, 1, 0, 1]))
            .toBe(3);
    });

    it('Keep subset after remove one', (): void => {
        expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]))
            .toBe(5);
    });
})
