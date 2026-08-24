import {stoneGameVIII} from '../script'

describe('1872. Stone Game VIII', (): void => {
    it('alternating sign stones require weighing partial merges', (): void => {
        expect(stoneGameVIII([-1, 2, -3, 4, -5])).toBe(5)
    })

    it('merging every stone at once is optimal for alice', (): void => {
        expect(stoneGameVIII([7, -6, 5, 10, 5, -2, -6])).toBe(13)
    })

    it('minimum length forces a single move with negative stones', (): void => {
        expect(stoneGameVIII([-10, -12])).toBe(-22)
    })

    it('minimum length forces a single move with positive stones', (): void => {
        expect(stoneGameVIII([1, 2])).toBe(3)
    })

    it('all zero valued stones produce no score difference', (): void => {
        expect(stoneGameVIII([0, 0, 0])).toBe(0)
    })

    it('large all positive input completes efficiently', (): void => {
        const stones: number[] = new Array<number>(100000).fill(1)

        expect(stoneGameVIII(stones)).toBe(100000)
    })

    it('large alternating sign input completes efficiently', (): void => {
        const stones: number[] = new Array<number>(100000)

        for (let index: number = 0; index < stones.length; index++) {
            stones[index] = index % 2 === 0 ? 5 : -5
        }

        expect(stoneGameVIII(stones)).toBe(5)
    })
})
