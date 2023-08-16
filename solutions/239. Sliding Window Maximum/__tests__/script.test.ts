import {maxSlidingWindow} from '../script'

describe('239. Sliding Window Maximum', (): void => {

    it('Multiple windows', (): void => {
        expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
            .toStrictEqual([3, 3, 5, 5, 6, 7])
    })

    it('The only window', (): void => {
        expect(maxSlidingWindow([1], 1))
            .toStrictEqual([1])
    })

    it('No windows', (): void => {
        expect(maxSlidingWindow([1], 2))
            .toStrictEqual([])
    })
})
