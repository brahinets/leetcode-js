import {largestValues} from "../script"
import {arrayToTree} from "../../../common/tree-utils"

describe('515. Find Largest Value in Each Tree Row', (): void => {

    it('One-level tree', (): void => {
        expect(largestValues(arrayToTree([1])))
            .toEqual([1])
    })

    it('Two-level tree', (): void => {
        expect(largestValues(arrayToTree([1, 2, 3])))
            .toEqual([1, 3])
    })

    it('Max is zero', (): void => {
        expect(largestValues(arrayToTree([1, -3, 0])))
            .toEqual([1, 0])
    })

    it('Multi-level tree', (): void => {
        expect(largestValues(arrayToTree([1, 3, 2, 5, 3, null, 9])))
            .toEqual([1, 3, 9])
    })
})
