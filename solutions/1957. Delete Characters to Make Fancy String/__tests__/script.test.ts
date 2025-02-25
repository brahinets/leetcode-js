import {makeFancyString} from '../script'

describe('1957. Delete Characters to Make Fancy String', (): void => {
    it('One to remove, to make fancy', (): void => {
        expect(makeFancyString("leeetcode"))
            .toBe("leetcode")
    })

    it('Multiple to remove, to make fancy', (): void => {
        expect(makeFancyString("aaabaaaa"))
            .toBe("aabaa")
    })

    it('Nothing to remove, already fancy', (): void => {
        expect(makeFancyString("aab"))
            .toBe("aab")
    })
})
