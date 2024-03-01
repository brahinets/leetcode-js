import {maximumOddBinaryNumber} from '../script'

describe('2864. Maximum Odd Binary Number', (): void => {

    it('Zero ', (): void => {
        expect(maximumOddBinaryNumber("000"))
            .toBe("000")
    })

    it('Last ', (): void => {
        expect(maximumOddBinaryNumber("010"))
            .toBe("001")
    })

    it('Leading', (): void => {
        expect(maximumOddBinaryNumber("0101"))
            .toBe("1001")
    })
})
