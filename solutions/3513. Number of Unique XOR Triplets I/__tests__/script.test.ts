import { uniqueXorTriplets } from '../script'

describe('3513. Number of Unique XOR Triplets I', (): void => {
    it('two elements yields the two original values', (): void => {
        const nums: number[] = [1, 2]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(2)
    })

    it('three elements spans every value below the next power of two', (): void => {
        const nums: number[] = [3, 1, 2]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(4)
    })

    it('single element permutation', (): void => {
        const nums: number[] = [1]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(1)
    })

    it('length equal to a power of two boundary', (): void => {
        const nums: number[] = [1, 2, 3, 4]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(8)
    })

    it('length just above a power of two', (): void => {
        const nums: number[] = [5, 3, 1, 4, 2]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(8)
    })

    it('length seven fits in three bits', (): void => {
        const nums: number[] = [7, 6, 5, 4, 3, 2, 1]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(8)
    })

    it('length eight requires four bits', (): void => {
        const nums: number[] = [8, 7, 6, 5, 4, 3, 2, 1]

        const result: number = uniqueXorTriplets(nums)

        expect(result)
            .toBe(16)
    })
})
