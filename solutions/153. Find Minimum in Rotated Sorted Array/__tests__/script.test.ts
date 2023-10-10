import {findMin} from '../script'

describe('153. Find Minimum in Rotated Sorted Array', (): void => {
    it('Min last', (): void => {
        expect(findMin([3, 4, 5, 2, 1]))
            .toBe(1)
    })

    it('Min middle', (): void => {
        expect(findMin([4, 5, 6, 7, 0, 1, 2]))
            .toBe(0)
    })

    it('Min first', (): void => {
        expect(findMin([11, 13, 15, 17]))
            .toBe(11)
    })
})
