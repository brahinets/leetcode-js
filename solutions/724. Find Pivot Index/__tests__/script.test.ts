import {pivotIndex} from '../script'

describe('724. Find Pivot Index', (): void => {
    it('No possible pivot', (): void => {
        expect(pivotIndex([1, 2, 3]))
            .toBe(-1)
    })

    it('No possible pivot for empty input', (): void => {
        expect(pivotIndex([]))
            .toBe(-1)
    })

    it('Pivot on the edge', (): void => {
        expect(pivotIndex([2, 1, -1]))
            .toBe(0)
    })

    it('Pivot in the middle', (): void => {
        expect(pivotIndex([1, 7, 3, 6, 5, 6]))
            .toBe(3)
    })
})
