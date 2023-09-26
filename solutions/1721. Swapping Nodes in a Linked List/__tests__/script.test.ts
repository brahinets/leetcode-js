import {swapNodes} from '../script'
import {linkedListOf} from "../../../common/list-utils";

describe('1721. Swapping Nodes in a Linked List', (): void => {
    it('Swap boundaries, first and last', (): void => {
        expect(swapNodes(
            linkedListOf(1, 2, 3, 4, 5),
            1
        )).toStrictEqual(
            linkedListOf(5, 2, 3, 4, 1)
        );
    });

    it('Swap center', (): void => {
        expect(swapNodes(
            linkedListOf(1, 2, 3, 4, 5),
            3
        )).toStrictEqual(
            linkedListOf(1, 2, 3, 4, 5)
        );
    });

    it('Swap in the middle', (): void => {
        expect(swapNodes(
            linkedListOf(7, 9, 6, 6, 7, 8, 3, 0, 9, 5),
            5
        )).toStrictEqual(
            linkedListOf(7, 9, 6, 6, 8, 7, 3, 0, 9, 5)
        );
    });
})
