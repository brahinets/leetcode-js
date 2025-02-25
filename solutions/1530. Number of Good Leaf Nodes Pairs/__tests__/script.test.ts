import {countPairs} from "../script"
import {arrayToTree} from "../../../common/tree-utils"

describe('1530. Number of Good Leaf Nodes Pairs', (): void => {

    it('Small tree', (): void => {
        expect(countPairs(arrayToTree([1, 2, 3, null, 4]), 3))
            .toBe(1)
    })

    it('Multiple good nodes', (): void => {
        expect(countPairs(arrayToTree([1, 2, 3, 4, 5, 6, 7]), 3))
            .toBe(2)
    })

    it('The only good pair in big tree', (): void => {
        expect(countPairs(arrayToTree([7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2]), 3))
            .toBe(1)
    })
})
