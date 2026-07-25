import { maxProduct } from '../script'

describe('3536. Maximum Product of Two Digits', (): void => {
    it('two distinct digits multiply to their product', (): void => {
        const n: number = 31

        const result: number = maxProduct(n)

        expect(result)
            .toBe(3)
    })

    it('repeated digit may be used twice', (): void => {
        const n: number = 22

        const result: number = maxProduct(n)

        expect(result)
            .toBe(4)
    })

    it('picks the two largest digits among three', (): void => {
        const n: number = 124

        const result: number = maxProduct(n)

        expect(result)
            .toBe(8)
    })

    it('smallest possible input', (): void => {
        const n: number = 10

        const result: number = maxProduct(n)

        expect(result)
            .toBe(0)
    })

    it('two largest digits are not adjacent', (): void => {
        const n: number = 91827

        const result: number = maxProduct(n)

        expect(result)
            .toBe(72)
    })

    it('largest input within constraints', (): void => {
        const n: number = 1000000000

        const result: number = maxProduct(n)

        expect(result)
            .toBe(0)
    })

    it('all identical largest digits', (): void => {
        const n: number = 999999999

        const result: number = maxProduct(n)

        expect(result)
            .toBe(81)
    })
})
