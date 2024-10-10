import {maxWidthRamp} from '../script'

describe('962. Maximum Width Ramp', (): void => {

    it('No ramp', (): void => {
        expect(maxWidthRamp([8, 2, 1]))
            .toEqual(0)
    })

    it('Short ramp', (): void => {
        expect(maxWidthRamp([6, 0, 8, 2, 1, 5]))
            .toEqual(4)
    })

    it('Long ramp', (): void => {
        expect(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]))
            .toEqual(7)
    })
})
