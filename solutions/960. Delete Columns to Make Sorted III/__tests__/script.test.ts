import {minDeletionSize} from '../script'

describe('960. Delete Columns to Make Sorted III', (): void => {
    it('Delete some', (): void => {
        expect(minDeletionSize(["babca", "bbazb"]))
            .toBe(3)
    })

    it('Delete many', (): void => {
        expect(minDeletionSize(["edcba"]))
            .toBe(4)
    })

    it('All rows are already lexicographically sorted', (): void => {
        expect(minDeletionSize(["ghi", "def", "abc"]))
            .toBe(0)
    })
})
