import {isSubPath} from '../script'
import {linkedListOf} from "../../../common/list-factories"
import {arrayToTree} from "../../../common/tree-utils"

describe('1367. Linked List in Binary Tree', (): void => {
    it('Nodes in right a subpath in the binary Tree.', (): void => {
        expect(isSubPath(linkedListOf(4, 2, 8), arrayToTree([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3])))
            .toBe(true)
    })

    it('Nodes in middle a subpath in the binary Tree.', (): void => {
        expect(isSubPath(linkedListOf(1, 4, 2, 6), arrayToTree([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3])))
            .toBe(true)
    })

    it('Not a subpath.', (): void => {
        expect(isSubPath(linkedListOf(1, 4, 2, 6, 8), arrayToTree([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3])))
            .toBe(false)
    })

})
