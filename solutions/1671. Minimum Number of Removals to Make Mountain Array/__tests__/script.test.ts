import {minimumMountainRemovals} from '../script'

describe('1671. Minimum Number of Removals to Make Mountain Array', (): void => {

    it('Already mountain, nothing to remove', (): void => {
        expect(minimumMountainRemovals([1, 3, 1]))
            .toBe(0)
    })

    it('Not mountain yet, several to remove', (): void => {
        expect(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]))
            .toBe(3)
    })
})
