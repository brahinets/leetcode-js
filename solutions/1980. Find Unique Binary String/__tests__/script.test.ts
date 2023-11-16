import {findDifferentBinaryString} from '../script'

describe('1980. Find Unique Binary String', (): void => {

    it('Multiple ways to satisfy', (): void => {
        expect(findDifferentBinaryString(["01", "10"]))
            .toBe("00")
    })

    it('One possible way to satisfy', (): void => {
        expect(findDifferentBinaryString(["00", "01"]))
            .toBe("10")
    })

    it('Array already satisfies the conditions', (): void => {
        expect(findDifferentBinaryString(["111", "011", "001"]))
            .toBe("000")
    })
})
