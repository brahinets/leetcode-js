import {minimumDiameterAfterMerge} from '../script'

describe('3203. Find Minimum Diameter After Merging Two Trees', (): void => {
    it('One', (): void => {
        expect(minimumDiameterAfterMerge(
            [[0, 1], [0, 2], [0, 3]],
            [[0, 1]]
        )).toBe(3)
    })

    it('Two', (): void => {
        expect(minimumDiameterAfterMerge(
            [[0, 1], [0, 2], [0, 3], [2, 4], [2, 5], [3, 6], [2, 7]],
            [[0, 1], [0, 2], [0, 3], [2, 4], [2, 5], [3, 6], [2, 7]]
        )).toBe(5)
    })
})
