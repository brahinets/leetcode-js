import {minDifference} from '../script'

describe('1509. Minimum Difference Between Largest and Smallest Value in Three Moves', (): void => {

    it('Equalize', (): void => {
        expect(minDifference([5, 3, 2, 4]))
            .toBe(0)
    })

    it('Make similar', (): void => {
        expect(minDifference([1, 5, 0, 10, 14]))
            .toBe(1)
    })

    it('To zero', (): void => {
        expect(minDifference([3, 100, 20]))
            .toBe(0)
    })
})
