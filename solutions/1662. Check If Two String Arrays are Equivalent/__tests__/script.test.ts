import {arrayStringsAreEqual} from '../script'

describe('1662. Check If Two String Arrays are Equivalent', (): void => {

    it('Equal after concatenation. Same size', (): void => {
        expect(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
            .toBe(true)
    })

    it('Equal after concatenation. Different size', (): void => {
        expect(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]))
            .toBe(true)
    })

    it('Not equal', (): void => {
        expect(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]))
            .toBe(false)
    })
})
