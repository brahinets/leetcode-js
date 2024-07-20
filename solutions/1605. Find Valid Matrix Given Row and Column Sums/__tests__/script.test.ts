import {restoreMatrix} from '../script'

describe('1605. Find Valid Matrix Given Row and Column Sums', (): void => {
    it('First', (): void => {
        expect(restoreMatrix([3, 8], [4, 7]))
            .toEqual([
                [3, 0],
                [1, 7]
            ])
    })

    it('Second', (): void => {
        expect(restoreMatrix([5, 7, 10], [8, 6, 8]))
            .toEqual([
                [5, 0,  0],
                [3, 4, 0],
                [0, 2, 8]
            ])
    })
})
