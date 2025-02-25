import {minOperations} from '../script'

describe('1598. Crawler Log Folder', (): void => {

    it('Already in root', (): void => {
        expect(minOperations(["d1/", "../", "../", "../"]))
            .toBe(0)
    })

    it('Almost in root', (): void => {
        expect(minOperations(["d1/", "d2/", "../", "./"]))
            .toBe(1)
    })

    it('Child', (): void => {
        expect(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]))
            .toBe(3)
    })
})
