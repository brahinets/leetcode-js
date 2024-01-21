import {arraysAreEqual, count, last} from "../array-utils"

describe('Counting', (): void => {
    it('Empty', (): void => {
        expect(count([]))
            .toStrictEqual(new Map<string, number>())
    })

    it('Count numbers', (): void => {
        expect(count([1, 2, 2, 3, 3, 3]))
            .toStrictEqual(new Map<number, number>([[1, 1], [2, 2], [3, 3]]))
    })

    it('Count strings', (): void => {
        expect(count(["a", "bb", "bb", "ccc", "ccc", "ccc"]))
            .toStrictEqual(new Map<string, number>([["a", 1], ["bb", 2], ["ccc", 3]]))
    })
})

describe('Last', (): void => {
    it('Empty', (): void => {
        expect(last([]))
            .toBeUndefined()
    })

    it('The only', (): void => {
        expect(last([1]))
            .toBe(1)
    })

    it('Last', (): void => {
        expect(last(["a", "bb"]))
            .toBe("bb")
    })
})

describe('Equality', (): void => {
    it('Equal Empty', (): void => {
        expect(arraysAreEqual([], []))
            .toBe(true)
    })

    it('Equal Numbers', (): void => {
        expect(arraysAreEqual([1], [1]))
            .toBe(true)
    })

    it('Equal Strings', (): void => {
        expect(arraysAreEqual(["-"], ["-"]))
            .toBe(true)
    })

    it('Not Equal Size', (): void => {
        expect(arraysAreEqual([null], []))
            .toBe(false)
    })

    it('Not Equal Numbers', (): void => {
        expect(arraysAreEqual([1], [2]))
            .toBe(false)
    })

    it('Not Equal Strings', (): void => {
        expect(arraysAreEqual(["a"], ["b"]))
            .toBe(false)
    })
})
