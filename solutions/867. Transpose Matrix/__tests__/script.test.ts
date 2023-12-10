import {transpose} from '../script'

describe('867. Transpose Matrix', (): void => {

    it('Single', (): void => {
        expect(transpose([[5]]))
            .toEqual([[5]])
    })

    it('Square', (): void => {
        expect(transpose([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])).toEqual([
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ])
    })

    it('Non square', (): void => {
        expect(transpose([
            [1, 2, 3],
            [4, 5, 6]
        ])).toEqual([
            [1, 4],
            [2, 5],
            [3, 6]
        ])
    })
})
