import {equalSubstring} from '../script'

describe('1208. Get Equal Substrings Within Budget', (): void => {

    it('Has cost for several', (): void => {
        expect(equalSubstring("abcd", "bcdf", 3))
            .toBe(3)
    })

    it('Each char cost equally. Has cost only for one', (): void => {
        expect(equalSubstring("abcd", "cdef", 3))
            .toBe(1)
    })

    it('Each char cost differently. Should choose in the middle', (): void => {
        expect(equalSubstring("krrgw", "zjxss", 19))
            .toBe(2)
    })


    it('Each char cost differently. Should choose prefix', (): void => {
        expect(equalSubstring("pxezla", "loewbi", 25))
            .toBe(4)
    })

    it('Cannot make any change because cost is limited', (): void => {
        expect(equalSubstring("bcd", "cde", 0))
            .toBe(0)
    })

    it('Has equal character out of the box', (): void => {
        expect(equalSubstring("abcd", "acde", 0))
            .toBe(1)
    })
})
