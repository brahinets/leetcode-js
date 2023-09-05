import {longestConsecutive} from '../script'

describe('128. Longest Consecutive Sequence', (): void => {
    it('No sequence', (): void => {
        expect(longestConsecutive([]))
            .toBe(0)
    })

    it('Very short sequence', (): void => {
        expect(longestConsecutive([1]))
            .toBe(1)
    })

    it('Short sequence', (): void => {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2]))
            .toBe(4)
    })

    it('Long sequence', (): void => {
        expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
            .toBe(9)
    })
})
