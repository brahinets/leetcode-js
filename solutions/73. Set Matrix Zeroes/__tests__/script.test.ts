import {setZeroes} from '../script'

describe('73. Set Matrix Zeroes', (): void => {
    it('One', (): void => {
        const matrix: number[][] = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ]

        setZeroes(matrix)

        expect(matrix).toEqual([
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
        ])
    })

    it('Two', (): void => {
        const matrix: number[][] = [
            [0, 1, 2, 0],
            [3, 4, 5, 2],
            [1, 3, 1, 5]
        ]

        setZeroes(matrix)

        expect(matrix).toEqual([
            [0, 0, 0, 0],
            [0, 4, 5, 0],
            [0, 3, 1, 0]
        ])
    })
})
