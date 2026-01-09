import {createBinaryTree} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('2196. Create Binary Tree From Descriptions', (): void => {

    it('Almost full tree', (): void => {
        expect(createBinaryTree([[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]))
            .toEqual(arrayToTree([50, 20, 80, 15, 17, 19]))
    })

    it('Lefty tree', (): void => {
        expect(createBinaryTree([[1, 2, 1], [2, 3, 0], [3, 4, 1]]))
            .toEqual(arrayToTree([1, 2, null, null, 3, 4]))
    })
})
