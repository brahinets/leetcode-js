import {findMaxFish} from '../script'

describe('2658. Maximum Number of Fish in a Grid\n', (): void => {
    it('Multiple fish', (): void => {
        expect(findMaxFish([
            [0, 2, 1, 0],
            [4, 0, 0, 3],
            [1, 0, 0, 4],
            [0, 3, 2, 0]
        ])).toBe(7)
    })

    it('Single fish', (): void => {
        expect(findMaxFish([
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 1]
        ])).toBe(1)
    })
})
