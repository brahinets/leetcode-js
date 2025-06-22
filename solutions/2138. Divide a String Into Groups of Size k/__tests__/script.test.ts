import {divideString} from '../script'

describe('2138. Divide a String Into Groups of Size k', (): void => {
    it('Do not need to use fill', (): void => {
        expect(divideString("abcdefghi", 3, "x"))
            .toEqual(["abc", "def", "ghi"])
    })

    it('Use fill multiple times', (): void => {
        expect(divideString("abcdefghij", 3, "x"))
            .toEqual(["abc", "def", "ghi", "jxx"])
    })
})
