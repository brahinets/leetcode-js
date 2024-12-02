import {isPrefixOfWord} from '../script'

describe('1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence', (): void => {
    it('Prefix only one time', (): void => {
        expect(isPrefixOfWord("i love eating burger", "burg"))
            .toBe(4)
    })

    it('Prefix first time', (): void => {
        expect(isPrefixOfWord("this problem is an easy problem", "pro"))
            .toBe(2)
    })

    it('Not a prefix of any wor', (): void => {
        expect(isPrefixOfWord("i am tired", "you"))
            .toBe(-1)
    })
})
