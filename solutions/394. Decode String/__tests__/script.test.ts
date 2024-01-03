import {decodeString} from '../script'

describe('394. Decode String', (): void => {
    it('Simple multiplier', (): void => {
        expect(decodeString("3[a]2[bc]"))
            .toBe("aaabcbc")
    })

    it('Inner multiplier', (): void => {
        expect(decodeString("3[a2[c]]"))
            .toBe("accaccacc")
    })

    it('Complex multiplier', (): void => {
        expect(decodeString("2[abc]3[cd]ef"))
            .toBe("abcabccdcdcdef")
    })
})
