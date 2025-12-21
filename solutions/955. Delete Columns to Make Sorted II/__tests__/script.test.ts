import {minDeletionSize} from '../script'

describe('955. Delete Columns to Make Sorted II', (): void => {
    it('We have to delete some columns', (): void => {
        expect(minDeletionSize(["ca", "bb", "ac"]))
            .toBe(1)
    })

    it('strs is already in lexicographic order', (): void => {
        expect(minDeletionSize(["xc", "yb", "za"]))
            .toBe(0)
    })

    it('We have to delete every column', (): void => {
        expect(minDeletionSize(["zyx", "wvu", "tsr"]))
            .toBe(3)
    })
})
