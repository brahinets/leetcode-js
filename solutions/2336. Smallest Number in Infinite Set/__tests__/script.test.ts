import {SmallestInfiniteSet} from '../script'

describe('2336. Smallest Number in Infinite Set', (): void => {
    it('Test', (): void => {
        const set: SmallestInfiniteSet = new SmallestInfiniteSet()
        let number;

        set.addBack(2);

        number = set.popSmallest();
        expect(number).toBe(1);

        number = set.popSmallest();
        expect(number).toBe(2);

        number = set.popSmallest();
        expect(number).toBe(3);

        number = set.popSmallest();
        expect(number).toBe(4);

        number = set.popSmallest();
        expect(number).toBe(5);

    });
})