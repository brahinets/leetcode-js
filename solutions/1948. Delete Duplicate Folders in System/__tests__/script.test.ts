import {deleteDuplicateFolder} from '../script'

describe('1948. Delete Duplicate Folders in System', (): void => {
    it('One', (): void => {
        expect(deleteDuplicateFolder([["a"], ["c"], ["d"], ["a", "b"], ["c", "b"], ["d", "a"]]))
            .toEqual([["d"], ["d", "a"]])
    })

    it('Two', (): void => {
        expect(deleteDuplicateFolder([["a"], ["c"], ["a", "b"], ["c", "b"], ["a", "b", "x"], ["a", "b", "x", "y"], ["w"], ["w", "y"]]))
            .toEqual([["a"], ["a", "b"],["c"], ["c", "b"]])
    })

    it('All folders are unique in the file system', (): void => {
        expect(deleteDuplicateFolder([["a", "b"], ["c", "d"], ["c"], ["a"]]))
            .toEqual([["a"], ["a", "b"],["c"], ["c", "d"]])
    })
})
