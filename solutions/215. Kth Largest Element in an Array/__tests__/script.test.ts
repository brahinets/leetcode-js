import {findKthLargest} from '../script'

describe('215. Kth Largest Element in an Array', (): void => {

    it('Max by unique', (): void => {
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2))
            .toStrictEqual(5);
    });

    it('Max by duplicates', (): void => {
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
            .toStrictEqual(4);
    });
})
