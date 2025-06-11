import {maxDifference} from '../script'

describe('3445. Maximum Difference Between Even and Odd Frequency II', (): void => {
    it('One', (): void => {
        expect(maxDifference("12233", 4))
            .toBe(-1)
    })


    it('Two', (): void => {
        expect(maxDifference("1122211", 3))
            .toBe(1)
    })

    it('Three', (): void => {
        expect(maxDifference("110", 3))
            .toBe(-1)
    })
})
