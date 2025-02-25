import {getWinner} from '../script'

describe('1535. Find the Winner of an Array Game', (): void => {

    it('Has all pairs', (): void => {
        expect(getWinner([2, 1, 3, 5, 4, 6, 7], 2))
            .toBe(5)
    })

    it('Can be negative', (): void => {
        expect(getWinner([3, 2, 1], 10))
            .toBe(3)
    })
})
