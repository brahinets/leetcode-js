import { maxValue } from "../script"

describe("3660. Jump Game IX", (): void => {
    it("returns self when only backward reachable values are smaller", (): void => {
        const nums: number[] = [2, 1, 3]

        const result: number[] = maxValue(nums)

        expect(result).toEqual([2, 2, 3])
    })

    it("propagates maximum through forward-then-backward chain", (): void => {
        const nums: number[] = [2, 3, 1]

        const result: number[] = maxValue(nums)

        expect(result).toEqual([3, 3, 3])
    })

    it("handles single element", (): void => {
        const nums: number[] = [5]

        const result: number[] = maxValue(nums)

        expect(result).toEqual([5])
    })

    it("gives each position its own value when array is strictly increasing", (): void => {
        const nums: number[] = [1, 2, 3, 4]

        const result: number[] = maxValue(nums)

        expect(result).toEqual([1, 2, 3, 4])
    })

    it("reaches global maximum from all positions when array is strictly decreasing", (): void => {
        const nums: number[] = [4, 3, 2, 1]

        const result: number[] = maxValue(nums)

        expect(result).toEqual([4, 4, 4, 4])
    })

    it("isolates position unreachable due to no smaller right neighbors or larger left neighbors", (): void => {
        const nums: number[] = [1, 4, 2, 5, 3]

        const result: number[] = maxValue(nums)

        expect(result).toEqual([1, 5, 5, 5, 5])
    })

    it("treats equal values as separate components since no strict inversion", (): void => {
        const nums: number[] = [3, 3, 3]

        const result: number[] = maxValue(nums)

        expect(result).toEqual([3, 3, 3])
    })

    it("groups positions bridged through a valley into one component", (): void => {
        const nums: number[] = [3, 5, 2, 4, 1]

        const result: number[] = maxValue(nums)

        expect(result).toEqual([5, 5, 5, 5, 5])
    })
})
