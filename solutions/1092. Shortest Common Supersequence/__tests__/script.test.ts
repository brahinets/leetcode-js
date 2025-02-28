import {shortestCommonSupersequence} from '../script'

describe('1092. Shortest Common Supersequence', (): void => {
    it('Complex string', (): void => {
        expect(shortestCommonSupersequence("abac", "cab"))
            .toBe("cabac")
    })

    it('Just string', (): void => {
        expect(shortestCommonSupersequence("aaaaaaaa", "aaaaaaaa"))
            .toBe("aaaaaaaa")
    })
})
