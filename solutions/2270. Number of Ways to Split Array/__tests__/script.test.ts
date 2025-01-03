import {waysToSplitArray} from '../script'

describe('2270. Number of Ways to Split Array', (): void => {
    it('Multiple splits #1', (): void => {
        expect(waysToSplitArray([10, 4, -8, 7]))
            .toBe(2)
    })

    it('Multiple splits #2', (): void => {
        expect(waysToSplitArray([2, 3, 1, 0]))
            .toBe(2)
    })
})
