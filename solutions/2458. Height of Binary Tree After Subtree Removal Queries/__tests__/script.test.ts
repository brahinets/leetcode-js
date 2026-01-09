import {treeQueries} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('2458. Height of Binary Tree After Subtree Removal Queries', (): void => {
    it('One removal', (): void => {
        expect(treeQueries(arrayToTree([1, 3, 4, 2, null, 6, 5, null, null, null, null, null, 7]), [4]))
            .toEqual([2])
    })

    it('Multiple removals', (): void => {
        expect(treeQueries(arrayToTree([5, 8, 9, 2, 1, 3, 7, 4, 6]), [3, 2, 4, 8]))
            .toEqual([3, 2, 3, 2])
    })
})
