import {recoverFromPreorder} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('1028. Recover a Tree From Preorder Traversal', (): void => {
    it('Balanced Tree', (): void => {
        expect(recoverFromPreorder("1-2--3--4-5--6--7"))
            .toEqual(arrayToTree([1, 2, 5, 3, 4, 6, 7]))
    })

    it('Two side unbalanced', (): void => {
        expect(recoverFromPreorder("1-2--3---4-5--6---7"))
            .toEqual(arrayToTree([1, 2, 5, 3, null, 6, null, 4, null, 7]))
    })

    it('One side unbalanced', (): void => {
        expect(recoverFromPreorder("1-401--349---90--88"))
            .toEqual(arrayToTree([1, 401, null, 349, 88, 90]))
    })
})
