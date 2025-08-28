import {sortMatrix} from '../script'

describe('3446. Sort Matrix by Diagonals', (): void => {
    it('Big', (): void => {
        expect(sortMatrix([
            [1, 7, 3],
            [9, 8, 2],
            [4, 5, 6]
        ])).toBe([
            [8, 2, 3],
            [9, 6, 7],
            [4, 5, 1]
        ])
    })

    it('Medium', (): void => {
        expect(sortMatrix([
            [0, 1],
            [1, 2]
        ])).toBe([
            [2, 1],
            [1, 0]
        ])
    })

    it('Small', (): void => {
        expect(sortMatrix([
            [1]
        ])).toBe([
            [1]
        ])
    })
})
