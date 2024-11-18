import {decrypt} from '../script'

describe('1652. Defuse the Bomb', (): void => {
    it('Use next numbers', (): void => {
        expect(decrypt([5, 7, 1, 4], 3))
            .toEqual([12, 10, 16, 13])
    })

    it('When k is zero, the numbers are replaced by 0', (): void => {
        expect(decrypt([1, 2, 3, 4], 0))
            .toEqual([0, 0, 0, 0])
    })

    it('Use previous numbers', (): void => {
        expect(decrypt([2, 4, 9, 3], -2))
            .toEqual([12, 5, 6, 13])
    })
})
