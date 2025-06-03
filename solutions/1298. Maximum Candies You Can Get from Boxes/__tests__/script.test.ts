import {maxCandies} from '../script'

describe('1298. Maximum Candies You Can Get from Boxes', (): void => {
    it('One', (): void => {
        expect(maxCandies([1, 0, 1, 0], [7, 5, 4, 100], [[], [], [1], []], [[1, 2], [3], [], []], [0]))
            .toBe(16)
    })

    it('Two', (): void => {
        expect(maxCandies([1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1], [[1, 2, 3, 4, 5], [], [], [], [], []], [[1, 2, 3, 4, 5], [], [], [], [], []], [0]))
            .toBe(6)
    })
})
