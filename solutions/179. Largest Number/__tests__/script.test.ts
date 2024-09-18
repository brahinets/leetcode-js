import {largestNumber} from '../script'

describe('179. Largest Number', (): void => {
    it('One', (): void => {
        expect(largestNumber([10, 2]))
            .toBe("210")
    })

    it('Two', (): void => {
        expect(largestNumber([3, 30, 34, 5, 9]))
            .toBe("9534330")
    })

    it('Remove trailing zeros', (): void => {
        expect(largestNumber([0, 0]))
            .toBe("0")
    })
})
