import { sumRootToLeaf } from '../script'
import { arrayToTree } from "../../../common/tree-utils"

describe('1022. Sum of Root To Leaf Binary Numbers', (): void => {
    it('Multiple paths', (): void => {
        expect(sumRootToLeaf(arrayToTree([1, 0, 1, 0, 1, 0, 1])))
            .toBe(22)
    })

    it('Single node with value 0', (): void => {
        expect(sumRootToLeaf(arrayToTree([0])))
            .toBe(0)
    })

    it('Single node with value 1', (): void => {
        expect(sumRootToLeaf(arrayToTree([1])))
            .toBe(1)
    })

    it('Empty tree', (): void => {
        expect(sumRootToLeaf(arrayToTree([])))
            .toBe(0)
    })

    it('Tree with only left children', (): void => {
        expect(sumRootToLeaf(arrayToTree([1, 1, null, 0])))
            .toBe(6)
    })
})
