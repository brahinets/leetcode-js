import {delNodes} from "../script"
import {arrayToTree} from "../../../common/tree-utils"

describe('1110. Delete Nodes And Return Forest', (): void => {

    it('Sub-trees roots left', (): void => {
        expect(delNodes(arrayToTree([1, 2, 3, 4, 5, 6, 7]), [3, 5]))
            .toEqual([arrayToTree([1, 2, null, 4]), arrayToTree([6]), arrayToTree([7])])
    })

    it('Sub-trees roots left', (): void => {
        expect(delNodes(arrayToTree([1, 2, null, 4, 3]), [2, 3]))
            .toEqual([arrayToTree([1]), arrayToTree([4])])
    })

    it('The original leaves left', (): void => {
        expect(delNodes(arrayToTree([1, 2, 4, null, 3]), [3]))
            .toEqual([arrayToTree([1, 2, 4])])
    })
})
