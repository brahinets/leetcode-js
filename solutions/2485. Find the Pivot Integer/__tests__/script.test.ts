import {pivotInteger} from '../script'

describe('2485. Find the Pivot Integer', (): void => {

    it('Has pivot', (): void => {
        expect(pivotInteger(8))
            .toBe(6)
    })

    it('Already pivot', (): void => {
        expect(pivotInteger(1))
            .toBe(1)
    })

    it('No pivot', (): void => {
        expect(pivotInteger(4))
            .toBe(-1)
    })

    it('No pivot #2', (): void => {
        expect(pivotInteger(15))
            .toBe(-1)
    })
})
