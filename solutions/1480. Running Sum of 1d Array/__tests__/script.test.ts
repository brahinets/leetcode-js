import {runningSum} from '../script'

describe('1480. Running Sum of 1d Array', (): void => {

    it('One', (): void => {
        expect(runningSum([1, 2, 3, 4]))
            .toEqual([1, 3, 6, 10])
    })

    it('Two', (): void => {
        expect(runningSum([1, 1, 1, 1, 1]))
            .toEqual([1, 2, 3, 4, 5])
    })

    it('Three', (): void => {
        expect(runningSum([3, 1, 2, 10, 1]))
            .toEqual([3, 4, 6, 16, 17])
    })
})
