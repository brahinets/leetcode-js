import {repeatLimitedString} from '../script'

describe('2182. Construct String With Repeat Limit', (): void => {
    it('Use all characters', (): void => {
        expect(repeatLimitedString("cczazcc", 3))
            .toBe("zzcccac")
    })

    it('Use some characters', (): void => {
        expect(repeatLimitedString("aababab", 2))
            .toBe("bbabaa")
    })

    it('Use no characters', (): void => {
        expect(repeatLimitedString("aaa", 1))
            .toBe("a")
    })
})
