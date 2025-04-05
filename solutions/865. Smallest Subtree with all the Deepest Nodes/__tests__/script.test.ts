import {subtreeWithAllDeepest} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('865. Smallest Subtree with all the Deepest Nodes', (): void => {
    it('Leaf deep', (): void => {
        expect(subtreeWithAllDeepest(arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])))
            .toEqual(arrayToTree([2, 7, 4]))
    })

    it('Root is the deepest', (): void => {
        expect(subtreeWithAllDeepest(arrayToTree([1])))
            .toEqual(arrayToTree([1]))
    })

    it('Leaf 2 deep', (): void => {
        expect(subtreeWithAllDeepest(arrayToTree([0, 1, 3, null, 2])))
            .toEqual(arrayToTree([2]))
    })
})
