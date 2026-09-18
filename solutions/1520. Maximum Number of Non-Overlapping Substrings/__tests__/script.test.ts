import { maxNumOfSubstrings } from '../script'

describe('1520. Maximum Number of Non-Overlapping Substrings', (): void => {
    it('splits into smaller substrings when it increases the count', (): void => {
        const input: string = 'adefaddaccc'

        const result: string[] = maxNumOfSubstrings(input)

        expect([...result].sort())
            .toEqual(['ccc', 'e', 'f'])
    })

    it('prefers the selection with the smaller total length among equal counts', (): void => {
        const input: string = 'abbaccd'

        const result: string[] = maxNumOfSubstrings(input)

        expect([...result].sort())
            .toEqual(['bb', 'cc', 'd'])
    })

    it('single character string', (): void => {
        const input: string = 'a'

        const result: string[] = maxNumOfSubstrings(input)

        expect(result)
            .toEqual(['a'])
    })

    it('string where every character is unique', (): void => {
        const input: string = 'abcdef'

        const result: string[] = maxNumOfSubstrings(input)

        expect(result)
            .toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
    })

    it('entire string forms a single valid substring', (): void => {
        const input: string = 'abab'

        const result: string[] = maxNumOfSubstrings(input)

        expect(result)
            .toEqual(['abab'])
    })

    it('repeated single character', (): void => {
        const input: string = 'aaaa'

        const result: string[] = maxNumOfSubstrings(input)

        expect(result)
            .toEqual(['aaaa'])
    })
})
