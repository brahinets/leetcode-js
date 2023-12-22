import {maxScore} from '../script'

describe('1422. Maximum Score After Splitting a String', (): void => {

    it('Short left and long right', (): void => {
        expect(maxScore("011101"))
            .toBe(5)
    })

    it('Mid left and mid right', (): void => {
        expect(maxScore("00111"))
            .toBe(5)
    })

    it('No left and all right', (): void => {
        expect(maxScore("1111"))
            .toBe(3)
    })
})
