import {maxTargetNodes} from '../script'

describe('3373. Maximize the Number of Target Nodes After Connecting Trees II', (): void => {
    it('One', (): void => {
        expect(maxTargetNodes([[0, 1], [0, 2], [2, 3], [2, 4]], [[0, 1], [0, 2], [0, 3], [2, 7], [1, 4], [4, 5], [4, 6]]))
            .toEqual([8, 7, 7, 8, 8])
    })


    it('Two', (): void => {
        expect(maxTargetNodes([[0, 1], [0, 2], [0, 3], [0, 4]], [[0, 1], [1, 2], [2, 3]]))
            .toEqual([3, 6, 6, 6, 6])
    })
})
