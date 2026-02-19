import { countBinarySubstrings } from '../script'

describe('696. Count Binary Substrings', (): void => {
    it('Returns 6 for "00110011"', (): void => {
        expect(countBinarySubstrings('00110011')).toBe(6)
    })

    it('Returns 4 for "10101"', (): void => {
        expect(countBinarySubstrings('10101')).toBe(4)
    })

    it('Returns 1 for "01"', (): void => {
        expect(countBinarySubstrings('01')).toBe(1)
    })

    it('Returns 0 for single character "0"', (): void => {
        expect(countBinarySubstrings('0')).toBe(0)
    })

    it('Returns 0 for all same characters "0000"', (): void => {
        expect(countBinarySubstrings('0000')).toBe(0)
    })
})
