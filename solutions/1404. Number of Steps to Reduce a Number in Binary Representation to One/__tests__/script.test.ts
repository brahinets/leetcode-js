import {numSteps} from '../script'

describe('1404. Number of Steps to Reduce a Number in Binary Representation to One', (): void => {
    it('Already one', (): void => {
        expect(numSteps("1"))
            .toBe(0)
    })

    it('Only divide', (): void => {
        expect(numSteps("10"))
            .toBe(1)
    })

    it('Divide and add', (): void => {
        expect(numSteps("1101"))
            .toBe(6)
    })

    it('Very big number overflowing int', (): void => {
        expect(numSteps("1111011110000011100000110001011011110010111001010111110001"))
            .toBe(85)
    })
})
