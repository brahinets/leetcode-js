import { maxAlternatingSum } from '../script'

describe('3727. Maximum Alternating Sum of Squares', (): void => {
    it('odd length with positive values', (): void => {
        const nums: number[] = [1, 2, 3]

        const result: number = maxAlternatingSum(nums)

        expect(result)
            .toBe(12)
    })

    it('even length with mirrored positive and negative values', (): void => {
        const nums: number[] = [1, -1, 2, -2, 3, -3]

        const result: number = maxAlternatingSum(nums)

        expect(result)
            .toBe(16)
    })

    it('single element', (): void => {
        const nums: number[] = [-5]

        const result: number = maxAlternatingSum(nums)

        expect(result)
            .toBe(25)
    })

    it('two elements subtract the smaller square', (): void => {
        const nums: number[] = [-3, 4]

        const result: number = maxAlternatingSum(nums)

        expect(result)
            .toBe(7)
    })

    it('all zeros', (): void => {
        const nums: number[] = [0, 0, 0, 0]

        const result: number = maxAlternatingSum(nums)

        expect(result)
            .toBe(0)
    })

    it('all equal values on even length cancel out', (): void => {
        const nums: number[] = [7, 7, 7, 7]

        const result: number = maxAlternatingSum(nums)

        expect(result)
            .toBe(0)
    })

    it('maximum magnitude values at full length', (): void => {
        const nums: number[] = new Array<number>(100000).fill(-40000)

        const result: number = maxAlternatingSum(nums)

        expect(result)
            .toBe(0)
    })

    it('maximum magnitude with odd length leaves one positive square', (): void => {
        const nums: number[] = new Array<number>(99999).fill(40000)

        const result: number = maxAlternatingSum(nums)

        expect(result)
            .toBe(1600000000)
    })
})
