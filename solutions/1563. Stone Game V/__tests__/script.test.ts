import { stoneGameV } from '../script'

describe('1563. Stone Game V', (): void => {
    it('alice picks splits that favor the smaller remaining sum', (): void => {
        const stoneValue: number[] = [6, 2, 3, 4, 5, 5]

        const result: number = stoneGameV(stoneValue)

        expect(result)
            .toBe(18)
    })

    it('equal values let alice choose which half survives every round', (): void => {
        const stoneValue: number[] = [7, 7, 7, 7, 7, 7, 7]

        const result: number = stoneGameV(stoneValue)

        expect(result)
            .toBe(28)
    })

    it('single stone ends the game with no score', (): void => {
        const stoneValue: number[] = [4]

        const result: number = stoneGameV(stoneValue)

        expect(result)
            .toBe(0)
    })

    it('two stones score the smaller one', (): void => {
        const stoneValue: number[] = [3, 9]

        const result: number = stoneGameV(stoneValue)

        expect(result)
            .toBe(3)
    })

    it('maximum stone value at the boundary of the allowed range', (): void => {
        const stoneValue: number[] = [1000000, 1000000, 1000000, 1000000]

        const result: number = stoneGameV(stoneValue)

        expect(result)
            .toBe(3000000)
    })
})
