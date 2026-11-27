import { maximumSaleItems } from '../script'

describe('3946. Maximum Number of Items From Sale I', (): void => {
    it('divisibility chain with mixed prices', (): void => {
        expect(maximumSaleItems([[6, 2], [2, 6], [3, 4]], 9)).toBe(4)
    })

    it('several overlapping divisibility chains', (): void => {
        expect(
            maximumSaleItems([[2, 4], [3, 2], [4, 1], [6, 4], [12, 4]], 8)
        ).toBe(10)
    })

    it('budget affords no item', (): void => {
        expect(maximumSaleItems([[5, 10], [3, 7]], 6)).toBe(0)
    })

    it('single item bought repeatedly without free copies', (): void => {
        expect(maximumSaleItems([[7, 3]], 10)).toBe(3)
    })

    it('single item whose factor divides only itself', (): void => {
        expect(maximumSaleItems([[1, 5]], 5)).toBe(1)
    })

    it('cheap item activation unlocks many free copies', (): void => {
        expect(
            maximumSaleItems([[2, 100], [4, 1], [6, 1], [8, 1]], 3)
        ).toBe(4)
    })

    it('pricier item wins through its free copies', (): void => {
        expect(maximumSaleItems([[4, 5], [2, 3], [8, 3]], 8)).toBe(5)
    })

    it('duplicate factors give each other free copies', (): void => {
        expect(maximumSaleItems([[6, 3], [6, 3]], 6)).toBe(4)
    })

    it('extra budget left unspent when nothing affordable remains', (): void => {
        expect(maximumSaleItems([[4, 3], [8, 5]], 7)).toBe(3)
    })

    it('maximum single factor with tight budget', (): void => {
        expect(maximumSaleItems([[1500, 1500]], 1499)).toBe(0)
    })
})
