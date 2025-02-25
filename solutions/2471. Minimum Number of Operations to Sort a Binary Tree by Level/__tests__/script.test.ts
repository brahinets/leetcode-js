import {minimumOperations} from '../script'
import {arrayToTree} from "../../../common/tree-utils";

describe('2471. Minimum Number of Operations to Sort a Binary Tree by Level', (): void => {
    it('Sort different level tree', (): void => {
        expect(minimumOperations(arrayToTree([1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10])))
            .toBe(3)
    })

    it('Sort same level tree', (): void => {
        expect(minimumOperations(arrayToTree([1, 3, 2, 7, 6, 5, 4])))
            .toBe(3)
    })

    it('Each level is already sorted', (): void => {
        expect(minimumOperations(arrayToTree([1, 2, 3, 4, 5, 6])))
            .toBe(0)
    })
})
