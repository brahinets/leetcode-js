import {longestConsecutive} from '../script'

describe('128. Longest Consecutive Sequence', (): void => {
    it('No sequence', (): void => {
        expect(longestConsecutive([]))
            .toBe(0)
    })

    it('The only sequence', (): void => {
        expect(longestConsecutive([1]))
            .toBe(1)
    })

    it('First sequence is longest', (): void => {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2]))
            .toBe(4)
    })

    it('Non-unique sequence', (): void => {
        expect(longestConsecutive([1, 2, 0, 1]))
            .toBe(3)
    })

    it('Second subsequence is longest ', (): void => {
        expect(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))
            .toBe(7)
    })
})
