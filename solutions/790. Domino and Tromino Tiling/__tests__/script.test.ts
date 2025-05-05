import {numTilings} from '../script'

describe('790. Domino and Tromino Tiling', (): void => {
    it('Many', (): void => {
        expect(numTilings(3))
            .toBe(5)
    })

    it('Several', (): void => {
        expect(numTilings(2))
            .toBe(2)
    })

    it('The only', (): void => {
        expect(numTilings(1))
            .toBe(1)
    })
})
