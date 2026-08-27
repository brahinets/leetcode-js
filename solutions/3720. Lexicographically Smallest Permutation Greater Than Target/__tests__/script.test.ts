import { lexGreaterPermutation } from '../script'

describe('3720. Lexicographically Smallest Permutation Greater Than Target', (): void => {
    it('greater letter is found before the last character', (): void => {
        expect(lexGreaterPermutation('abc', 'bba')).toBe('bca')
    })

    it('target letter is entirely unavailable in the source string', (): void => {
        expect(lexGreaterPermutation('leet', 'code')).toBe('eelt')
    })

    it('no permutation of the source string exceeds the target', (): void => {
        expect(lexGreaterPermutation('baba', 'bbaa')).toBe('')
    })

    it('single character source equal to target has no greater permutation', (): void => {
        expect(lexGreaterPermutation('a', 'a')).toBe('')
    })

    it('single character source already exceeds the target', (): void => {
        expect(lexGreaterPermutation('b', 'a')).toBe('b')
    })

    it('duplicate letters require branching earlier than the final position', (): void => {
        expect(lexGreaterPermutation('aab', 'aba')).toBe('baa')
    })

    it('branch point falls exactly on the last character', (): void => {
        expect(lexGreaterPermutation('zzz', 'zzy')).toBe('zzz')
    })

    it('large input completes efficiently', (): void => {
        const s: string = 'a'.repeat(299) + 'z'
        const target: string = 'a'.repeat(300)

        expect(lexGreaterPermutation(s, target)).toBe('a'.repeat(299) + 'z')
    })
})
