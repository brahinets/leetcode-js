import {minSwaps} from '../script'

describe('1536. Minimum Swaps to Arrange a Binary Grid', (): void => {

    it('Example 1: 3 swaps', (): void => {
        expect(minSwaps([[0, 0, 1], [1, 1, 0], [1, 0, 0]]))
            .toBe(3)
    })

    it('Example 2: 0 swaps', (): void => {
        expect(minSwaps([[0, 1, 1, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 1, 1, 0]]))
            .toBe(-1)
    })

    it('Example 3: already valid', (): void => {
        expect(minSwaps([[1, 0, 0], [1, 1, 0], [1, 1, 1]]))
            .toBe(0)
    })
})
