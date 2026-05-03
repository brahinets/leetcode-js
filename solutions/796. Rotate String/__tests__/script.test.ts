import {rotateString} from '../script'

describe('796. Rotate String', (): void => {
    it('One shift', (): void => {
        expect(rotateString("abcde", "bcdea"))
            .toBe(true)
    })

    it('Two shifts', (): void => {
        expect(rotateString("abcde", "cdeab"))
            .toBe(true)
    })

    it('Impossible', (): void => {
        expect(rotateString("abcde", "abced"))
            .toBe(false)
    })

    it('Zero rotation', (): void => {
        expect(rotateString("abcde", "abcde"))
            .toBe(true)
    })

    it('Different lengths', (): void => {
        expect(rotateString("abc", "abcd"))
            .toBe(false)
    })

    it('Both empty', (): void => {
        expect(rotateString("", ""))
            .toBe(true)
    })

    it('Single character match', (): void => {
        expect(rotateString("a", "a"))
            .toBe(true)
    })

    it('Single character mismatch', (): void => {
        expect(rotateString("a", "b"))
            .toBe(false)
    })
})
