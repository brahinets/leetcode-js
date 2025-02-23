import {constructFromPrePost} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('889. Construct Binary Tree from Preorder and Postorder Traversal', (): void => {
    it('One', (): void => {
        expect(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]))
            .toEqual(arrayToTree([1, 2, 3, 4, 5, 6, 7]))
    })

    it('Two', (): void => {
        expect(constructFromPrePost([1], [1]))
            .toEqual(arrayToTree([1]))
    })
})
