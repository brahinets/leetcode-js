import {canCompleteCircuit} from '../script'

describe('134. Gas Station', (): void => {

    it('Complete circuit starting from middle station', (): void => {
        expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
            .toBe(3)
    })

    it('Impossible to complete circuit', (): void => {
        expect(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
            .toBe(-1)
    })

    it('Single station sufficient gas', (): void => {
        expect(canCompleteCircuit([5], [4]))
            .toBe(0)
    })

    it('Single station insufficient gas', (): void => {
        expect(canCompleteCircuit([2], [3]))
            .toBe(-1)
    })

    it('Complete circuit starting from last station', (): void => {
        expect(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]))
            .toBe(4)
    })

    it('Equal gas and cost at all stations', (): void => {
        expect(canCompleteCircuit([1, 1, 1, 1], [1, 1, 1, 1]))
            .toBe(0)
    })
})
