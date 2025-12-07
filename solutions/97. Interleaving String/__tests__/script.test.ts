import {isInterleave} from '../script'

describe('97. Interleaving String', (): void => {
    it('Easy', (): void => {
        expect(isInterleave("", "", ""))
            .toBe(true)
    })

    it('One way to obtain', (): void => {
        expect(isInterleave("aabcc", "dbbca", "aadbbcbcac"))
            .toBe(true)
    })

    it('Impossible', (): void => {
        expect(isInterleave("aabcc", "dbbca", "aadbbbaccc"))
            .toBe(false)
    })
})
