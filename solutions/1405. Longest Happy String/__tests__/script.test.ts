import {longestDiverseString} from '../script'

describe('1405. Longest Happy String', (): void => {
    it('Unique answer', (): void => {
        expect(longestDiverseString(7, 1, 0))
            .toBe("aabaa")
    })

    it('Multiple answers', (): void => {
        expect(longestDiverseString(1, 1, 7))
            .toBe("ccaccbcc")
    })

    it('Not found', (): void => {
        expect(longestDiverseString(0, 0, 0))
            .toBe("")
    })
})
