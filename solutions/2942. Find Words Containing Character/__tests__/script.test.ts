import {findWordsContaining} from '../script'

describe('2942. Find Words Containing Character', (): void => {
    it('In all words', (): void => {
        expect(findWordsContaining(["leet", "code"], "e"))
            .toEqual([0, 1])
    })

    it('In some words', (): void => {
        expect(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"))
            .toEqual([0, 2])
    })

    it('No occurrence', (): void => {
        expect(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"))
            .toEqual([])
    })
})
