import {findKthBit} from '../script'

describe('1545. Find Kth Bit in Nth Binary String', (): void => {

    it('One', (): void => {
        expect(findKthBit(3, 1))
            .toBe("0")
    })

    it('Two', (): void => {
        expect(findKthBit(4, 11))
            .toBe("1")
    })
})
