import {getDescentPeriods} from '../script'

describe('2110. Number of Smooth Descent Periods of a Stock', (): void => {
    it('Many descent periods', (): void => {
        expect(getDescentPeriods([3, 2, 1, 4]))
            .toBe(7)
    })

    it('Multiple descent periods', (): void => {
        expect(getDescentPeriods([8, 6, 7, 7]))
            .toBe(4)
    })

    it('Only one descent period', (): void => {
        expect(getDescentPeriods([1]))
            .toBe(1)
    })
})
