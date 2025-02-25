import {maxSatisfied} from '../script'

describe('1052. Grumpy Bookstore Owner', (): void => {

    it('Do not use grumpy pill ', (): void => {
        expect(maxSatisfied([1], [0], 1))
            .toBe(1)
    })

    it('Use part of grumpy pill', (): void => {
        expect(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3))
            .toBe(16)
    })

    it('Use full grumpy pill', (): void => {
        expect(maxSatisfied([1], [1], 1))
            .toBe(1)
    })
})
