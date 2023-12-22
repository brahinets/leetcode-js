import {SortedList} from "../SortedList";

describe('Sorted Numbers String Test', (): void => {
    const ascendingNumbersSorting = (a: number, b: number): number => a - b

    it('Empty numbers list', (): void => {
        expect(new SortedList<number>(ascendingNumbersSorting).size())
            .toBe(0)
    })

    it('One number', (): void => {
        const sortedList: SortedList<number> = new SortedList<number>(ascendingNumbersSorting)
        sortedList.add(1)

        expect(sortedList.size())
            .toBe(1)
    })

    it('Sort Two Numbers', (): void => {
        const sortedList: SortedList<number> = new SortedList<number>(ascendingNumbersSorting)
        sortedList.add(2)
        sortedList.add(1)

        expect(sortedList.toArray())
            .toEqual([1, 2])
    })

    it('Sort Many Numbers', (): void => {
        const sortedList: SortedList<number> = new SortedList<number>(ascendingNumbersSorting)
        sortedList.add(3)
        sortedList.add(1)
        sortedList.add(2)

        expect(sortedList.toArray())
            .toEqual([1, 2, 3])
    })
})
describe('Sorted Numbers List Test', (): void => {
    const alphabeticCaseInsensitiveStringSorting = (a: string, b: string): number => a.toLowerCase().localeCompare(b.toLowerCase())

    it('Empty String List', (): void => {
        expect(new SortedList<string>(alphabeticCaseInsensitiveStringSorting).size())
            .toBe(0)
    })

    it('One String', (): void => {
        const sortedList: SortedList<string> = new SortedList<string>(alphabeticCaseInsensitiveStringSorting)
        sortedList.add("a")

        expect(sortedList.size())
            .toBe(1)
    })

    it('Sort Two String Same Case', (): void => {
        const sortedList: SortedList<string> = new SortedList<string>(alphabeticCaseInsensitiveStringSorting)
        sortedList.add("b")
        sortedList.add("a")

        expect(sortedList.toArray())
            .toEqual(["a", "b"])
    })

    it('Sort Many Strings Different Case', (): void => {
        const sortedList: SortedList<string> = new SortedList<string>(alphabeticCaseInsensitiveStringSorting)
        sortedList.add("C")
        sortedList.add("a")
        sortedList.add("b")

        expect(sortedList.toArray())
            .toEqual(["a", "b", "C"])
    })
})
describe('Limit Sorted List Test', (): void => {
    const alphabeticCaseInsensitiveStringSorting = (a: string, b: string): number => a.toLowerCase().localeCompare(b.toLowerCase())

    it('Limit size', (): void => {
        const sortedList: SortedList<string> = new SortedList<string>(alphabeticCaseInsensitiveStringSorting, 2)
        sortedList.add("b")
        sortedList.add("a")
        sortedList.add("c")

        expect(sortedList.toArray())
            .toEqual(["a", "b"])
    })

    it('Validate limit', (): void => {
        expect(() => new SortedList<object>(alphabeticCaseInsensitiveStringSorting, 0))
            .toThrow("Limit must be greater than 0")

        expect(() => new SortedList<object>(alphabeticCaseInsensitiveStringSorting, -1))
            .toThrow("Limit must be greater than 0")
    })
})
