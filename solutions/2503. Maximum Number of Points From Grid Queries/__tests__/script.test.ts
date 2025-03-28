import {maxPoints} from '../script'

describe('2503. Maximum Number of Points From Grid Queries', (): void => {
    it('Can get some points', (): void => {
        expect(maxPoints([[1, 2, 3], [2, 5, 7], [3, 5, 1]], [5, 6, 2]))
            .toEqual([5, 8, 1])
    })

    it('Can not get any points', (): void => {
        expect(maxPoints([[5, 2, 1], [1, 1, 2]], [3]))
            .toEqual([0])
    })
})
