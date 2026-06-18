import { maximumJumps } from '../script'

describe('2855. Maximum Number of Jumps to Reach the Last Index', (): void => {
    it('three jumps when target allows limited range', (): void => {
        const numbers: number[] = [1, 3, 6, 4, 1, 2]
        const target: number = 2

        const result: number = maximumJumps(numbers, target)

        expect(result)
            .toBe(3)
    })

    it('all consecutive jumps when target covers all adjacent differences', (): void => {
        const numbers: number[] = [1, 3, 6, 4, 1, 2]
        const target: number = 3

        const result: number = maximumJumps(numbers, target)

        expect(result)
            .toBe(5)
    })

    it('no path when target is zero and all elements differ', (): void => {
        const numbers: number[] = [1, 3, 6, 4, 1, 2]
        const target: number = 0

        const result: number = maximumJumps(numbers, target)

        expect(result)
            .toBe(-1)
    })

    it('single jump on two equal elements with target zero', (): void => {
        const numbers: number[] = [5, 5]
        const target: number = 0

        const result: number = maximumJumps(numbers, target)

        expect(result)
            .toBe(1)
    })

    it('reaches last index by skipping unreachable middle element', (): void => {
        const numbers: number[] = [0, 100, 1]
        const target: number = 1

        const result: number = maximumJumps(numbers, target)

        expect(result)
            .toBe(1)
    })

    it('unreachable last index when no chain of jumps connects start to end', (): void => {
        const numbers: number[] = [0, 5, 10]
        const target: number = 1

        const result: number = maximumJumps(numbers, target)

        expect(result)
            .toBe(-1)
    })
})
