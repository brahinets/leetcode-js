import {customSortString} from '../script'

describe('791. Custom Sort String', (): void => {

    it('Sort by order', (): void => {
        expect(customSortString("cba", "abcd"))
            .toBe("cbad")
    })

    it('Sort by order and left in the end', (): void => {
        expect(customSortString("bcafg", "abcd"))
            .toBe("bcad")
    })

    it('Sort by order and  and left in the end #2', (): void => {
        expect(customSortString("exv", "xwvee"))
            .toBe("eexvw")
    })
})
