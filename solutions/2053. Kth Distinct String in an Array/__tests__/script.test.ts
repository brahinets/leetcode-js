import {kthDistinct} from '../script'

describe('2053. Kth Distinct String in an Array', (): void => {

    it('Multiple distinct value', (): void => {
        expect(kthDistinct(["d", "b", "c", "b", "c", "a"], 2))
            .toBe("a")
    })

    it('All distinct values', (): void => {
        expect(kthDistinct(["aaa", "aa", "a"], 1))
            .toBe("aaa")
    })

    it('Empty string since there are fewer distinct value', (): void => {
        expect(kthDistinct(["a", "b", "a"], 3))
            .toBe("")
    })
})
