import {maxPathSum} from '../script'
import {arrayToTree} from "../../../common/tree-utils";

describe('124. Binary Tree Maximum Path Sum', (): void => {
    it('One', (): void => {
        expect(maxPathSum(arrayToTree([1, 2, 3])))
            .toBe(6)
    })

    it('Two', (): void => {
        expect(maxPathSum(arrayToTree([-10, 9, 20, null, null, 15, 7])))
            .toBe(42)
    })
})
