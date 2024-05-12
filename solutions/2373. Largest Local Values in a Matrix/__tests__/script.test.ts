import {largestLocal} from '../script'

describe('2373. Largest Local Values in a Matrix', (): void => {
    it('The only', (): void => {
        expect(largestLocal([
            [5, 7, 8],
            [5, 6, 2],
            [8, 2, 6]
        ])).toEqual([[8]])
    })

    it('Middle', (): void => {
        expect(largestLocal([
            [9, 9, 8, 1],
            [5, 6, 2, 6],
            [8, 2, 6, 4],
            [6, 2, 2, 2]
        ])).toEqual([[9, 9], [8, 6]])
    })

    it('Multiple', (): void => {
        expect(largestLocal([
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 2, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ])).toEqual([[2, 2, 2], [2, 2, 2], [2, 2, 2]])
    })
})
