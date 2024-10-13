import {smallestRange} from '../script'

describe('632. Smallest Range Covering Elements from K Lists', (): void => {

    it('One', (): void => {
        expect(smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]))
            .toEqual([20, 24])
    })

    it('Two', (): void => {
        expect(smallestRange([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))
            .toEqual([1, 1])
    })
})
