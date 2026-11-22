import { checkString } from '../script'

describe("2124. Check if All A's Appears Before All B's", (): void => {
    it('detects all as before all bs', (): void => {
        expect(checkString('aaabbb')).toBe(true)
    })

    it('detects an a after a b', (): void => {
        expect(checkString('abab')).toBe(false)
    })

    it('detects a string with no as', (): void => {
        expect(checkString('bbb')).toBe(true)
    })

    it('detects a string with no bs', (): void => {
        expect(checkString('aaa')).toBe(true)
    })

    it('handles a single character', (): void => {
        expect(checkString('a')).toBe(true)
        expect(checkString('b')).toBe(true)
    })

    it('detects a single violation at the end', (): void => {
        expect(checkString('aaaba')).toBe(false)
    })

    it('detects a single violation in the middle', (): void => {
        expect(checkString('abaaa')).toBe(false)
    })
})
