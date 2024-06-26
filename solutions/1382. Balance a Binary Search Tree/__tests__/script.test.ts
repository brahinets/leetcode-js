import {balanceBST} from '../script'
import {arrayToTree} from "../../../common/tree-utils";

describe('1382. Balance a Binary Search Tree', (): void => {

    it('Need to balance', (): void => {
        expect(balanceBST(arrayToTree([1, null, 2, null, 3, null, 4, null, null])))
            .toEqual(arrayToTree([2, 1, 3, null, null, null, 4]))
    })

    it('Already balanced', (): void => {
        expect(balanceBST(arrayToTree([2, 1, 3])))
            .toEqual(arrayToTree([2, 1, 3]))
    })
})
