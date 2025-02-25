import {removeSubfolders} from '../script'

describe('1233. Remove Sub-Folders from the Filesystem', (): void => {

    it('Remove nothing', (): void => {
        expect(removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"]))
            .toEqual(["/a/b/c", "/a/b/ca", "/a/b/d"])
    })

    it('Remove one', (): void => {
        expect(removeSubfolders(["/a", "/a/b/c", "/a/b/d"]))
            .toEqual(["/a"])
    })

    it('Remove multiple', (): void => {
        expect(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]))
            .toEqual(["/a", "/c/d", "/c/f"])
    })
})
