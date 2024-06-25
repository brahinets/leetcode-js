import {bstToGst} from "../script"
import {arrayToTree} from "../../../common/tree-utils"

describe('1038. Binary Search Tree to Greater Sum Tree', (): void => {

    it('Change many nodes', (): void => {
        expect(bstToGst(arrayToTree([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8])))
            .toEqual(arrayToTree([30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8]))
    })

    it('Change few nodes', (): void => {
        expect(bstToGst(arrayToTree([0, null, 1])))
            .toEqual(arrayToTree([1, null, 1]))
    })
})
