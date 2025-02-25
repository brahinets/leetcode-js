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
})
