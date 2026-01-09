import {maxProduct} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('1339. Maximum Product of Splitted Binary Tree', (): void => {
    it('Remove edge on top', (): void => {
        expect(maxProduct(arrayToTree([1, 2, 3, 4, 5, 6])))
            .toBe(110)
    })

    it('Remove edge on middle', (): void => {
        expect(maxProduct(arrayToTree([1, null, 2, 3, 4, null, null, 5, 6])))
            .toBe(90)
    })
})
