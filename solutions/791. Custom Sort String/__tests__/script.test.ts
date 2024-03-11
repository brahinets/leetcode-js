import {customSortString} from '../script'

describe('791. Custom Sort String', (): void => {

    it('Sort by order', (): void => {
        expect(customSortString("cba", "abcd"))
            .toBe("cbad")
    })

    it('Sort by order and alphabetically', (): void => {
        expect(customSortString("bcafg", "abcd"))
            .toBe("bcad")
    })
})
