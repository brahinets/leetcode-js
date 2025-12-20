import {minDeletionSize} from '../script'

describe('944. Delete Columns to Make Sorted', (): void => {
    it('Delete one', (): void => {
        expect(minDeletionSize(["cba", "daf", "ghi"]))
            .toBe(1)
    })

    it('Delete nothing', (): void => {
        expect(minDeletionSize(["a", "b"]))
            .toBe(0)
    })

    it('Delete multiple', (): void => {
        expect(minDeletionSize(["zyx", "wvu", "tsr"]))
            .toBe(3)
    })
})
