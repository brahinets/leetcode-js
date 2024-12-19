import {maxChunksToSorted} from '../script'

describe('769. Max Chunks To Make Sorted', (): void => {
    it('One', (): void => {
        expect(maxChunksToSorted([4, 3, 2, 1, 0]))
            .toBe(1)
    })

    it('Two', (): void => {
        expect(maxChunksToSorted([1, 0, 2, 3, 4]))
            .toBe(4)
    })
})
