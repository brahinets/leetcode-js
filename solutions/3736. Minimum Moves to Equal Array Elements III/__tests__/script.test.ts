import { minMoves } from '../script'


describe('3736. Minimum Moves to Equal Array Elements III', (): void => {
    it('example 1', (): void => {
        const nums: number[] = [2, 1, 3]
        const result: number = minMoves(nums)

        expect(result)
            .toEqual(3)
    })

    it('example 2', (): void => {
        const nums: number[] = [4, 4, 5]
        const result: number = minMoves(nums)

        expect(result)
            .toEqual(2)
    })
})
