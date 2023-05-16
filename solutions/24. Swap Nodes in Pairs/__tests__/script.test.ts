import {swapPairs} from '../script'
import {linkedListOf} from "../../../common/list-utils";

describe('24. Swap Nodes in Pairs', (): void => {
    it('Swap nothing', (): void => {
        expect(swapPairs(
            linkedListOf([])
        )).toStrictEqual(
            linkedListOf([])
        );
    });

    it('Swap one', (): void => {
        expect(swapPairs(
            linkedListOf([1])
        )).toStrictEqual(
            linkedListOf([1])
        );
    });

    it('Swap all pairs', (): void => {
        expect(swapPairs(
            linkedListOf([1, 2, 3, 4])
        )).toStrictEqual(
            linkedListOf([2, 1, 4, 3])
        );
    });
})