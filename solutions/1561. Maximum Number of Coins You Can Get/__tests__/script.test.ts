import {maxCoins} from '../script'

describe('1561. Maximum Number of Coins You Can Get', (): void => {

    it('Few', (): void => {
        expect(maxCoins([2, 4, 5]))
            .toBe(4)
    })

    it('Several', (): void => {
        expect(maxCoins([2, 4, 1, 2, 7, 8]))
            .toBe(9)
    })

    it('Multiple', (): void => {
        expect(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]))
            .toBe(18)
    })
})
