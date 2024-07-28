import {secondMinimum} from '../script'

describe('2045. Second Minimum Time to Reach Destination', (): void => {

    it('Complex graph', (): void => {
        expect(secondMinimum(5, [[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]], 3, 5))
            .toBe(13)
    })

    it('Simple graph', (): void => {
        expect(secondMinimum(2, [[1, 2]], 3, 2))
            .toBe(11)
    })
})
