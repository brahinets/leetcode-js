import {onesMinusZeros} from '../script'

describe('2482. Difference Between Ones and Zeros in Row and Column', (): void => {

    it('Square matrix', (): void => {
        expect(onesMinusZeros([
            [0, 1, 1],
            [1, 0, 1],
            [0, 0, 1]]
        )).toEqual([
            [0, 0, 4],
            [0, 0, 4],
            [-2, -2, 2]
        ])
    })

    it('Non square matrix', (): void => {
        expect(onesMinusZeros([
            [1, 1, 1],
            [1, 1, 1]]
        )).toEqual([
            [5, 5, 5],
            [5, 5, 5]
        ])
    })
})
