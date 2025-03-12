import {maximumCount} from '../script'

describe('2529. Maximum Count of Positive Integer and Negative Integer', (): void => {
    it('More positives', (): void => {
        expect(maximumCount([-2, -1, 1, 2, 3]))
            .toBe(3)
    })

    it('More negatives', (): void => {
        expect(maximumCount([-3, -2, -1, 0, 0, 1, 2]))
            .toBe(3)
    })

    it('Only positives', (): void => {
        expect(maximumCount([5, 20, 66, 1314]))
            .toBe(4)
    })


    it('Only negatives', (): void => {
        expect(maximumCount([-5, -20, -66, -1314]))
            .toBe(4)
    })

    it('Equal count', (): void => {
        expect(maximumCount([-5, -20, 66, 1314]))
            .toBe(2)
    })
})
