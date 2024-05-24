import {maxScoreWords} from '../script'

describe('1255. Maximum Score Words Formed by Letters', (): void => {

    it('Not enough letters at all ', (): void => {
        expect(maxScoreWords(
            ["leetcode"],
            ["l", "e", "t", "c", "o", "d"],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
        )).toBe(0)
    })

    it('More words', (): void => {
        expect(maxScoreWords(
            ["xxxz", "ax", "bx", "cx"],
            ["z", "a", "b", "c", "x", "x", "x"],
            [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10]
        )).toBe(27)
    })

    it('Higher score', (): void => {
        expect(maxScoreWords(
            ["dog", "cat", "dad", "good"],
            ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
            [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        )).toBe(23)
    })
})
