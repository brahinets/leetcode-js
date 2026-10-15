import {sumCounts} from '../script'


describe('2913. Subarrays Distinct Element Sum of Squares I', (): void => {
    it('handles repeated values lowering distinct counts', (): void => {
        const nums: number[] = [1, 2, 1]

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(15)
    })

    it('handles identical values keeping distinct count at one', (): void => {
        const nums: number[] = [1, 1]

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(3)
    })

    it('handles single element', (): void => {
        const nums: number[] = [5]

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(1)
    })

    it('handles all distinct values maximizing each subarray count', (): void => {
        const nums: number[] = [1, 2, 3]

        const result: number = sumCounts(nums)

        expect(result)
            .toBe(20)
    })
})
