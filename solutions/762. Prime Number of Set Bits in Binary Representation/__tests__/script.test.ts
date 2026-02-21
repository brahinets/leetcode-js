import { countPrimeSetBits } from '../script'

describe('762. Prime Number of Set Bits in Binary Representation', (): void => {
    it('Range with multiple numbers', (): void => {
        expect(countPrimeSetBits(10, 15)).toBe(5)
    })

    it('Range with large numbers', (): void => {
        expect(countPrimeSetBits(17, 190)).toBe(104)
    })

    it('No prime set bits', (): void => {
        expect(countPrimeSetBits(1, 1)).toBe(0)
    })

    it('Single number with prime set bits', (): void => {
        expect(countPrimeSetBits(3, 3)).toBe(1)
    })
})


