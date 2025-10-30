import {minNumberOperations} from '../script'

describe('1526. Minimum Number of Increments on Subarrays to Form a Target Array', (): void => {
    it('One', (): void => {
        expect(minNumberOperations([1, 2, 3, 2, 1]))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(minNumberOperations([3, 1, 1, 2]))
            .toBe(4)
    })

    it('Three', (): void => {
        expect(minNumberOperations([3, 1, 5, 4, 2]))
            .toBe(7)
    })
})
