import {countTrapezoids} from '../script'

describe('3625. Count Number of Trapezoids II', (): void => {
    it('Many ways to pick four points that form a trapezoid', (): void => {
        expect(countTrapezoids([[71, -89], [-75, -89], [-9, 11], [-24, -89], [-51, -89], [-77, -89], [42, 11]]))
            .toBe(10)
    })

    it('Two distinct ways to pick four points that form a trapezoid', (): void => {
        expect(countTrapezoids([[-3, 2], [3, 0], [2, 3], [3, 2], [2, -3]]))
            .toBe(2)
    })

    it('Only one trapezoid which can be formed', (): void => {
        expect(countTrapezoids([[0, 0], [1, 0], [0, 1], [2, 1]]))
            .toBe(1)
    })

    it('No trapezoids can be formed', (): void => {
        expect(countTrapezoids([[82, 7], [82, -9], [82, -52], [82, 78]]))
            .toBe(0)
    })
})
