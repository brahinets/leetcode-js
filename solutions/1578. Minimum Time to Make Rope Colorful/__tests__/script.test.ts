import {minCost} from '../script'

describe('1578. Minimum Time to Make Rope Colorful', (): void => {

    it('Nothing to remove', (): void => {
        expect(minCost("abc", [1, 2, 3]))
            .toBe(0)
    })

    it('Remove in the middle', (): void => {
        expect(minCost("abaac", [1, 2, 3, 4, 5]))
            .toBe(3)
    })

    it('Remove edge baloons', (): void => {
        expect(minCost("aabaa", [1, 2, 3, 4, 1]))
            .toBe(2)
    })
})
