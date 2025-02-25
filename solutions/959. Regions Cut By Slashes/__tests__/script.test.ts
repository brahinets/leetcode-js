import {regionsBySlashes} from '../script'

describe('959. Regions Cut By Slashes', (): void => {
    it('The only', (): void => {
        expect(regionsBySlashes([" /", "  "]))
            .toBe(1)
    })

    it('Two', (): void => {
        expect(regionsBySlashes([" /", "/ "]))
            .toBe(2)
    })

    it('Multiple', (): void => {
        expect(regionsBySlashes(["/\\", "\\/"]))
            .toBe(5)
    })
})
