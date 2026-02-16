import {reverseWords} from '../script'

describe('151. Reverse Words in a String', (): void => {

    it('Multiple words', (): void => {
        expect(reverseWords("the sky is blue")).toBe("blue is sky the")
    })

    it('Leading and trailing spaces', (): void => {
        expect(reverseWords("  hello world  ")).toBe("world hello")
    })

    it('Multiple spaces between words', (): void => {
        expect(reverseWords("a good   example")).toBe("example good a")
    })
})
