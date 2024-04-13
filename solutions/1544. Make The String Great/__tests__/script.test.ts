import {makeGood} from '../script'

describe('1544. Make The String Great', (): void => {

    it('Can make great again', (): void => {
        expect(makeGood("leEeetcode"))
            .toBe("leetcode")
    })

    it('Cannot make great again', (): void => {
        expect(makeGood("abBAcC"))
            .toBe("")
    })

    it('Already great', (): void => {
        expect(makeGood("s"))
            .toBe("s")
    })
})
