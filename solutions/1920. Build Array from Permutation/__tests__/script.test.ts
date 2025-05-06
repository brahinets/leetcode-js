import {buildArray} from '../script'

describe('1920. Build Array from Permutation', (): void => {
    it('First', (): void => {
        expect(buildArray([0, 2, 1, 5, 3, 4]))
            .toEqual([0, 1, 2, 4, 5, 3])
    })

    it('Second', (): void => {
        expect(buildArray([5, 0, 1, 2, 3, 4]))
            .toEqual([4, 5, 0, 1, 2, 3])
    })
})
