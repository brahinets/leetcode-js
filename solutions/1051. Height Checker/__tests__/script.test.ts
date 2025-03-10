import {heightChecker} from '../script'

describe('1051. Height Checker', (): void => {

    it('All in correct place', (): void => {
        expect(heightChecker([1, 2, 3, 4, 5]))
            .toBe(0)
    })

    it('Some in incorrect place', (): void => {
        expect(heightChecker([5, 1, 2, 3, 4]))
            .toBe(5)
    })

    it('All in incorrect place', (): void => {
        expect(heightChecker([1, 1, 4, 2, 1, 3]))
            .toBe(3)
    })
})
