import {simplifyPath} from '../script'

describe('71. Simplify Path', (): void => {

    it('Extra trailing slash', (): void => {
        expect(simplifyPath("/home/"))
            .toBe("/home")
    })

    it('Root directory traversal', (): void => {
        expect(simplifyPath("/../"))
            .toBe("/")
    })

    it('Current and directory traversal mix', (): void => {
        expect(simplifyPath("/a/../../b/../c//.//"))
            .toBe("/c")
    })

    it('Directory traversal', (): void => {
        expect(simplifyPath("/home/dir/../"))
            .toBe("/home")
    })

    it('Duplicated slashes', (): void => {
        expect(simplifyPath("//home//foo//"))
            .toBe("/home/foo")
    })
})
