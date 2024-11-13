import {countFairPairs} from '../script'

describe('2563. Count the Number of Fair Pairs', (): void => {
    it('Multiple fair pairs', (): void => {
        expect(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6))
            .toBe(6)
    })

    it('Only one fair pair', (): void => {
        expect(countFairPairs([1, 7, 9, 2, 5], 11, 11))
            .toBe(1)
    })

    it('No fair pairs', (): void => {
        expect(countFairPairs([5, 7, 9], 11, 11))
            .toBe(0)
    })
})
