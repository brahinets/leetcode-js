import {canChange} from '../script'

describe('2337. Move Pieces to Obtain a String', (): void => {
    it('One', (): void => {
        expect(canChange("_L__R__R_", "L______RR"))
            .toBe(true)
    })

    it('Two', (): void => {
        expect(canChange("R_L_", "__LR"))
            .toBe(false)
    })

    it('Three', (): void => {
        expect(canChange("_R", "R_"))
            .toBe(false)
    })
})
