import {firstCompleteIndex} from '../script'

describe('2661. First Completely Painted Row or Column', (): void => {
    it('One', (): void => {
        expect(firstCompleteIndex(
            [1, 3, 4, 2],
            [
                [1, 4],
                [2, 3]
            ])).toBe(2)
    })

    it('Two', (): void => {
        expect(firstCompleteIndex(
            [2, 8, 7, 4, 1, 3, 5, 6, 9],
            [
                [3, 2, 5],
                [1, 4, 6],
                [8, 7, 9]
            ])).toBe(3)
    })
})
