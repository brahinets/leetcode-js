import {replaceWords} from '../script'

describe('648. Replace Words', (): void => {

    it('Replace some words', (): void => {
        expect(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"))
            .toBe("the cat was rat by the bat")
    })

    it('Replace all words', (): void => {
        expect(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"))
            .toBe("a a b c")
    })

    it('Use shortest roo', (): void => {
        expect(replaceWords(["a", "aa", "b", "c"], "aadsfasf absbs bbab cadsfafs"))
            .toBe("a a b c")
    })
})
