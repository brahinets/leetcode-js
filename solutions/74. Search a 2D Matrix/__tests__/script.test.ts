import {searchMatrix} from '../script'

describe('74. Search a 2D Matrix', (): void => {
    it('Contains', (): void => {
        expect(searchMatrix([
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60]],
            3)
        ).toBe(true)
    })

    it('Does not contain', (): void => {
        expect(searchMatrix([
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60]],
            13)
        ).toBe(false)
    })
})
