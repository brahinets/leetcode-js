import { uniqueXorTriplets } from '../script'

describe('3514. Number of Unique XOR Triplets II', (): void => {
    it('two elements produce two distinct triplet values', (): void => {
        const nums: number[] = [1, 3]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(2)
    })

    it('four consecutive elements each reachable', (): void => {
        const nums: number[] = [6, 7, 8, 9]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(4)
    })

    it('single element yields only itself', (): void => {
        const nums: number[] = [5]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(1)
    })

    it('duplicate values collapse to distinct set', (): void => {
        const nums: number[] = [2, 2, 2]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(1)
    })

    it('two identical values behave like a single element', (): void => {
        const nums: number[] = [4, 4]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(1)
    })

    it('zero is reachable when three values cancel out', (): void => {
        const nums: number[] = [1, 2, 3]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(4)
    })
})
