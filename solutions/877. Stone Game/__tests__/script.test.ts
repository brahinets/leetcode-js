import { stoneGame } from '../script'

describe('877. Stone Game', (): void => {
    it('single pair of piles', (): void => {
        const piles: number[] = [5, 4]

        const result: boolean = stoneGame(piles)

        expect(result)
            .toBe(true)
    })

    it('alice wins by picking ends optimally', (): void => {
        const piles: number[] = [5, 3, 4, 5]

        const result: boolean = stoneGame(piles)

        expect(result)
            .toBe(true)
    })

    it('larger even pile count', (): void => {
        const piles: number[] = [3, 7, 2, 3]

        const result: boolean = stoneGame(piles)

        expect(result)
            .toBe(true)
    })

    it('non monotonic pile values', (): void => {
        const piles: number[] = [1, 100, 2, 100, 1, 100]

        const result: boolean = stoneGame(piles)

        expect(result)
            .toBe(true)
    })
})
