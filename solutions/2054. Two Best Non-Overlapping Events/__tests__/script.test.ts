import {maxTwoEvents} from '../script'

describe('2054. Two Best Non-Overlapping Events', (): void => {
    it('Two events better than one', (): void => {
        expect(maxTwoEvents([[1, 3, 2], [4, 5, 2], [2, 4, 3]]))
            .toBe(4)
    })

    it('One big event', (): void => {
        expect(maxTwoEvents([[1, 3, 2], [4, 5, 2], [1, 5, 5]]))
            .toBe(5)
    })

    it('Two independent events', (): void => {
        expect(maxTwoEvents([[1, 5, 3], [1, 5, 1], [6, 6, 5]]))
            .toBe(8)
    })
})
