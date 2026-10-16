import {sumCounts} from '../script'


describe('2916. Subarrays Distinct Element Sum of Squares II', (): void => {
    it('repeated value lowering distinct count of enclosing subarrays', (): void => {
        const nums: number[] = [1, 2, 1]

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(15)
    })

    it('identical values keep distinct count at one', (): void => {
        const nums: number[] = [2, 2]

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(3)
    })

    it('single element', (): void => {
        const nums: number[] = [7]

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(1)
    })

    it('all distinct values maximize each subarray count', (): void => {
        const nums: number[] = [1, 2, 3]

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(20)
    })

    it('value reappearing after several distinct values', (): void => {
        const nums: number[] = [1, 2, 3, 1]

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(43)
    })

    it('maximum length of identical values wraps around modulo', (): void => {
        const nums: number[] = new Array<number>(100000).fill(1)

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(49965)
    })
})
