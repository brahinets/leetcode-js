import {flipEquiv} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('951. Flip Equivalent Binary Trees', (): void => {
    it('Binary trees are equivalent after multiple flips', (): void => {
        expect(flipEquiv(arrayToTree([1, 2, 3, 4, 5, 6, null, null, null, 7, 8]), arrayToTree([1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7])))
            .toBe(true)
    })

    it('Binary trees are equivalent already', (): void => {
        expect(flipEquiv(arrayToTree([]), arrayToTree([])))
            .toBe(true)
    })

    it('Binary trees cannot be equivalent', (): void => {
        expect(flipEquiv(arrayToTree([]), arrayToTree([1])))
            .toBe(false)
    })
})
