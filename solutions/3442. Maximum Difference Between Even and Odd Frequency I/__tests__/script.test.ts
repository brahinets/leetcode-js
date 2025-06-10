import {maxDifference} from '../script'

describe('3442. Maximum Difference Between Even and Odd Frequency I', (): void => {
    it('One', (): void => {
        expect(maxDifference("aaaaabbc"))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(maxDifference("abcabcab"))
            .toBe(1)
    })
})
