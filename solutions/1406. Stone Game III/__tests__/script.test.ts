import { stoneGameIII } from '../script'

describe('1406. Stone Game III', (): void => {
    it('bob wins by taking the only large pile', (): void => {
        const piles: number[] = [1, 2, 3, 7]

        const result: string = stoneGameIII(piles)

        expect(result)
            .toBe('Bob')
    })

    it('alice takes all three piles to avoid the trailing negative pile', (): void => {
        const piles: number[] = [1, 2, 3, -9]

        const result: string = stoneGameIII(piles)

        expect(result)
            .toBe('Alice')
    })

    it('tie when alice takes the first three piles', (): void => {
        const piles: number[] = [1, 2, 3, 6]

        const result: string = stoneGameIII(piles)

        expect(result)
            .toBe('Tie')
    })

    it('single pile taken entirely by alice', (): void => {
        const piles: number[] = [5]

        const result: string = stoneGameIII(piles)

        expect(result)
            .toBe('Alice')
    })

    it('alice must plan three moves ahead', (): void => {
        const piles: number[] = [20, 3, 4, 11, 2, 1, 14, 7]

        const result: string = stoneGameIII(piles)

        expect(result)
            .toBe('Alice')
    })
})
