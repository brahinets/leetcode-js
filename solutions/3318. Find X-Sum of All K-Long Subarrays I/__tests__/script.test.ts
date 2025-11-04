import {findXSum} from '../script'

describe('3318. Find X-Sum of All K-Long Subarrays I', (): void => {
    it('Some kept', (): void => {
        expect(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2))
            .toEqual([6, 10, 12])
    })

    it('Many kept', (): void => {
        expect(findXSum([3, 8, 7, 8, 7, 5], 2, 2))
            .toEqual([11, 15, 15, 15, 12])
    })
})
