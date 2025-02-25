import {slidingPuzzle} from '../script'

describe('773. Sliding Puzzle', (): void => {
    it('No moves needed', (): void => {
        expect(slidingPuzzle([
            [1, 2, 3],
            [4, 5, 0]
        ])).toBe(0)
    })

    it('One move', (): void => {
        expect(slidingPuzzle([
            [1, 2, 3],
            [4, 0, 5]
        ])).toBe(1)
    })

    it('Multiple moves', (): void => {
        expect(slidingPuzzle([
            [4, 1, 2],
            [5, 0, 3]
        ])).toBe(5)
    })

    it('Cannot be solved', (): void => {
        expect(slidingPuzzle([
            [1, 2, 3],
            [5, 4, 0]
        ])).toBe(-1)
    })
})
