import {smallestChair} from '../script'

describe('1942. The Number of the Smallest Unoccupied Chair', (): void => {
    it('Sit on first emptied', (): void => {
        expect(smallestChair([[1, 4], [2, 3], [4, 6]], 1))
            .toBe(1)
    })

    it('Sit on last empties', (): void => {
        expect(smallestChair([[3, 10], [1, 5], [2, 6]], 0))
            .toBe(2)
    })
})
