import {countTrapezoids} from '../script'

describe('3623. Count Number of Trapezoids I', (): void => {
    it('Multiple trapezoids', (): void => {
        expect(countTrapezoids([[1, 0], [2, 0], [3, 0], [2, 2], [3, 2]]))
            .toBe(3)
    })

    it('Only one trapezoid', (): void => {
        expect(countTrapezoids([[0, 0], [1, 0], [0, 1], [2, 1]]))
            .toBe(1)
    })
})
