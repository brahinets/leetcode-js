import {lastStoneWeight} from '../script'

describe('1046. Last Stone Weight', (): void => {
    it('Last stone left', (): void => {
        expect(lastStoneWeight([5, 2, 3, 1]))
            .toBe(1);
    });
    it('One stone left', (): void => {
        expect(lastStoneWeight([1]))
            .toBe(1);
    });
    it('No last stone', (): void => {
        expect(lastStoneWeight([5, 5, 3, 3]))
            .toBe(0);
    });
})
