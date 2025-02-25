import {replaceValueInTree} from '../script'
import {arrayToTree} from "../../../common/tree-utils";

describe('2641. Cousins in Binary Tree II', (): void => {
    it('One', (): void => {
        expect(replaceValueInTree(arrayToTree([5, 4, 9, 1, 10, null, 7])))
            .toEqual(arrayToTree([0, 0, 0, 7, 7, null, 11]))
    })

    it('Two', (): void => {
        expect(replaceValueInTree(arrayToTree([3, 1, 2])))
            .toEqual(arrayToTree([0, 0, 0]))
    })
})
