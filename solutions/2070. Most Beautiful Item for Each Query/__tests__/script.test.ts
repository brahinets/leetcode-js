import {maximumBeauty} from '../script'

describe('2070. Most Beautiful Item for Each Query', (): void => {
    it('One', (): void => {
        expect(maximumBeauty([[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], [1, 2, 3, 4, 5, 6]))
            .toEqual([2, 4, 5, 5, 6, 6])
    })

    it('Two', (): void => {
        expect(maximumBeauty([[1, 2], [1, 2], [1, 3], [1, 4]], [1]))
            .toEqual([4])
    })

    it('Three', (): void => {
        expect(maximumBeauty([[10, 1000]], [5]))
            .toEqual([0])
    })
})
