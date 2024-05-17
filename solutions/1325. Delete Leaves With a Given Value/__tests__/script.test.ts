import {removeLeafNodes} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('1325. Delete Leaves With a Given Value', (): void => {

    it('Remove leafs after leafs removal', (): void => {
        expect(removeLeafNodes(arrayToTree([1, 2, 3, 2, null, 2, 4]), 2))
            .toEqual(arrayToTree([1, null, 3, null, 4]))
    })


    it('Remove leafs after leafs removal', (): void => {
        expect(removeLeafNodes(arrayToTree([1, 2, null, 2, null, 2]), 2))
            .toEqual(arrayToTree([1]))
    })


    it('Remove leafs', (): void => {
        expect(removeLeafNodes(arrayToTree([1, 3, 3, 3, 2]), 3))
            .toEqual(arrayToTree([1, 3, null, null, 2]))
    })
})
