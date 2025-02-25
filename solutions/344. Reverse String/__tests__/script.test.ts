import {reverseString} from '../script'

describe('344. Reverse String', (): void => {
    it('Empty', (): void => {
        const string: string[] = []

        reverseString(string)

        expect(string).toEqual([])
    })

    it('Case insensitive', (): void => {
        const string: string[] = ["h", "e", "l", "l", "o"]

        reverseString(string)

        expect(string).toEqual(["o", "l", "l", "e", "h"])
    })

    it('Case sensitive', (): void => {
        const string: string[] = ["H", "a", "n", "n", "a", "h"]

        reverseString(string)

        expect(string).toEqual(["h", "a", "n", "n", "a", "H"])
    })

    it('Even length', (): void => {
        const string: string[] = ["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"]

        reverseString(string)

        expect(string).toEqual(["a", "m", "a", "n", "a", "P", " ", ":", "l", "a", "n", "a", "c", " ", "a", " ", ",", "n", "a", "l", "p", " ", "a", " ", ",", "n", "a", "m", " ", "A"])
    })
})
