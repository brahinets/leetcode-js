import {isCircularSentence} from '../script'

describe('1957. Delete Characters to Make Fancy String', (): void => {
    it('Circular sentence', (): void => {
        expect(isCircularSentence("leetcode exercises sound delightful"))
            .toBe(true)
    })

    it('Circular word', (): void => {
        expect(isCircularSentence("eetcode"))
            .toBe(true)
    })

    it('Not circular word', (): void => {
        expect(isCircularSentence("Leetcode"))
            .toBe(false)
    })

    it('Not circular sentence', (): void => {
        expect(isCircularSentence("Leetcode is cool"))
            .toBe(false)
    })
})
