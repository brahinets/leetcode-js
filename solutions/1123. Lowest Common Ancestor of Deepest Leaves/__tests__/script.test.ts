import {lcaDeepestLeaves} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('1123. Lowest Common Ancestor of Deepest Leaves', (): void => {
    it('Leaf deep', (): void => {
        expect(lcaDeepestLeaves(arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])))
            .toEqual(arrayToTree([2, 7, 4]))
    })

    it('Root is the deepest', (): void => {
        expect(lcaDeepestLeaves(arrayToTree([1])))
            .toEqual(arrayToTree([1]))
    })

    it('Leaf 2 deep', (): void => {
        expect(lcaDeepestLeaves(arrayToTree([0, 1, 3, null, 2])))
            .toEqual(arrayToTree([2]))
    })
})
