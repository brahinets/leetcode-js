import {maximumOddBinaryNumber} from '../script'

describe('2864. Maximum Odd Binary Number', (): void => {

    it('Zero is not odd', (): void => {
        expect(() => maximumOddBinaryNumber("000"))
            .toThrow("At least one positive bit is required for odd number")
    })

    it('Last', (): void => {
        expect(maximumOddBinaryNumber("010"))
            .toBe("001")
    })

    it('Leading', (): void => {
        expect(maximumOddBinaryNumber("0101"))
            .toBe("1001")
    })
})
