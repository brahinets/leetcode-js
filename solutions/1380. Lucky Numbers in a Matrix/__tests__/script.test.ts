import {luckyNumbers} from '../script'

describe('1380. Lucky Numbers in a Matrix', (): void => {
    it('First', (): void => {
        expect(luckyNumbers([
            [3, 7, 8],
            [9, 11, 13],
            [15, 16, 17]
        ])).toEqual([15])
    })

    it('Second', (): void => {
        expect(luckyNumbers([
            [1, 10, 4, 2],
            [9, 3, 8, 7],
            [15, 16, 17, 12]
        ])).toEqual([12])
    })

    it('Third', (): void => {
        expect(luckyNumbers([
            [7, 8],
            [1, 2]
        ])).toEqual([7])
    })
})
