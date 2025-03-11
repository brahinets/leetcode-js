import {numberOfSubstrings} from '../script'

describe('1358. Number of Substrings Containing All Three Characters', (): void => {
    it('Many', (): void => {
        expect(numberOfSubstrings("abcabc"))
            .toBe(10)
    })

    it('Multiple', (): void => {
        expect(numberOfSubstrings("aaacb"))
            .toBe(3)
    })

    it('The only', (): void => {
        expect(numberOfSubstrings("abc"))
            .toBe(1)
    })

    it('Zero', (): void => {
        expect(numberOfSubstrings("ab"))
            .toBe(0)
    })
})
