import {reversePrefix} from '../script'

describe('2000. Reverse Prefix of Word', (): void => {
    it('Reverse by first occurrence', (): void => {
        expect(reversePrefix("abcdefd", "d"))
            .toBe("dcbaefd")
    })

    it('Reverse by the only occurrence', (): void => {
        expect(reversePrefix("xyxzxe", "z"))
            .toBe("zxyxxe")
    })

    it('Reverse entire word', (): void => {
        expect(reversePrefix("xyxz", "z"))
            .toBe("zxyx")
    })

    it('Nothing to reverse', (): void => {
        expect(reversePrefix("abcd", "z"))
            .toBe("abcd")
    })
})
