import {calculateMinimumHP} from '../script'

describe('174. Dungeon Game', (): void => {
    it('minimum health of 7 for the example dungeon', (): void => {
        expect(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]])).toBe(7)
    })

    it('minimum health of 1 when single cell has positive value', (): void => {
        expect(calculateMinimumHP([[5]])).toBe(1)
    })

    it('minimum health of 2 when single cell has value -1', (): void => {
        expect(calculateMinimumHP([[-1]])).toBe(2)
    })

    it('minimum health of 1 when all cells are positive', (): void => {
        expect(calculateMinimumHP([[1, 2], [3, 4]])).toBe(1)
    })

    it('handles a single row dungeon', (): void => {
        expect(calculateMinimumHP([[-3, 5]])).toBe(4)
    })

    it('handles a single column dungeon', (): void => {
        expect(calculateMinimumHP([[-3], [5]])).toBe(4)
    })

    it('minimum health of 2 when path forces taking damage', (): void => {
        expect(calculateMinimumHP([[0, 0], [0, -1]])).toBe(2)
    })
})
