import {numSubmat} from '../script'

describe('1504. Count Submatrices With All Ones', (): void => {
    it('Multiple', (): void => {
        expect(numSubmat([
            [1, 0, 1],
            [1, 1, 0],
            [1, 1, 0]
        ])).toEqual(13)
    })


    it('Many', (): void => {
        expect(numSubmat([
            [0, 1, 1, 0],
            [0, 1, 1, 1],
            [1, 1, 1, 0]
        ])).toEqual(24)
    })
})
