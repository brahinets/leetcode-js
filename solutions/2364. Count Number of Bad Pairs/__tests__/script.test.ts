import {countBadPairs} from '../script'

describe('2364. Count Number of Bad Pairs', (): void => {
    it('Multiple bad pairs', (): void => {
        expect(countBadPairs([4, 1, 3, 3]))
            .toBe(5)
    })

    it('No bad pairs', (): void => {
        expect(countBadPairs([1, 2, 3, 4, 5]))
            .toBe(0)
    })
})
