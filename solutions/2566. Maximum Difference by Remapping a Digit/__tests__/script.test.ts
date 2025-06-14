import {minMaxDifference} from '../script'

describe('2566. Maximum Difference by Remapping a Digit', (): void => {
    it('One', (): void => {
        expect(minMaxDifference(11891))
            .toBe(99009)
    })

    it('Two', (): void => {
        expect(minMaxDifference(90))
            .toBe(99)
    })
})
