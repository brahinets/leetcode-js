import { findRepeatedDnaSequences } from '../script'

describe('187. Repeated DNA Sequences', (): void => {
    it('finds repeated sequences in the given example', (): void => {
        const s: string = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
        const result: string[] = findRepeatedDnaSequences(s)

        expect(result.sort()).toEqual(['AAAAACCCCC', 'CCCCCAAAAA'])
    })

    it('returns empty array when no sequences repeat', (): void => {
        const s: string = 'ACGTACGTAAGTA'
        const result: string[] = findRepeatedDnaSequences(s)

        expect(result).toEqual([])
    })

    it('returns empty array when string length is less than 10', (): void => {
        const s: string = 'AAAAAAAAA'
        const result: string[] = findRepeatedDnaSequences(s)

        expect(result).toEqual([])
    })

    it('handles string with exactly 10 characters with no repeats', (): void => {
        const s: string = 'ACGTACGTAC'
        const result: string[] = findRepeatedDnaSequences(s)

        expect(result).toEqual([])
    })

    it('handles multiple sequences repeating multiple times', (): void => {
        const s: string = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        const result: string[] = findRepeatedDnaSequences(s)

        expect(result).toEqual(['AAAAAAAAAA'])
    })

    it('returns each repeated sequence only once in result', (): void => {
        const s: string = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        const result: string[] = findRepeatedDnaSequences(s)

        expect(result.length).toBe(1)
        expect(result).toEqual(['AAAAAAAAAA'])
    })
})
