import {minSwaps} from '../script'

describe('2134. Minimum Swaps to Group All 1\'s Together II', (): void => {
    it('One swap needed', (): void => {
        expect(minSwaps([0, 1, 0, 1, 1, 0, 0]))
            .toBe(1)
    })

    it('One swap needed #2', (): void => {
        expect(minSwaps([0, 1, 0, 0, 1, 0, 0, 0, 1]))
            .toBe(1)
    })

    it('Few of the ways to group all the 1\'s together', (): void => {
        expect(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0]))
            .toBe(2)
    })

    it('All the 1\'s are already grouped together due to the circular property of the array', (): void => {
        expect(minSwaps([1, 1, 0, 0, 1]))
            .toBe(0)
    })
})
