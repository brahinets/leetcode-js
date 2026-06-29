import {numOfStrings} from '../script'

describe('1967. Number of Strings That Appear as Substrings in Word', (): void => {
    it('all patterns except one appear as substrings', (): void => {
        const patterns: string[] = ['a', 'abc', 'bc', 'd']
        const word: string = 'abc'

        const result: number = numOfStrings(patterns, word)

        expect(result)
            .toBe(3)
    })

    it('two out of three patterns appear as substrings', (): void => {
        const patterns: string[] = ['a', 'b', 'c']
        const word: string = 'aaaaabbbbb'

        const result: number = numOfStrings(patterns, word)

        expect(result)
            .toBe(2)
    })

    it('duplicate patterns all counted when each appears in word', (): void => {
        const patterns: string[] = ['a', 'a', 'a']
        const word: string = 'ab'

        const result: number = numOfStrings(patterns, word)

        expect(result)
            .toBe(3)
    })

    it('no patterns appear as substrings', (): void => {
        const patterns: string[] = ['x', 'y', 'z']
        const word: string = 'abc'

        const result: number = numOfStrings(patterns, word)

        expect(result)
            .toBe(0)
    })

    it('pattern equal to whole word counts as substring', (): void => {
        const patterns: string[] = ['hello']
        const word: string = 'hello'

        const result: number = numOfStrings(patterns, word)

        expect(result)
            .toBe(1)
    })
})
