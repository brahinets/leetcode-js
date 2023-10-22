import {SortedList} from "../SortedList";

describe('Sorted List Test', (): void => {
    it('Empty', (): void => {
        expect(new SortedList().size())
            .toBe(0)
    })

    it('One element', (): void => {
        const sortedList: SortedList = new SortedList()
        sortedList.add(1)

        expect(sortedList.size())
            .toBe(1)
    })

    it('Sort Two elements', (): void => {
        const sortedList: SortedList = new SortedList()
        sortedList.add(2)
        sortedList.add(1)

        expect(sortedList.toArray())
            .toEqual([1, 2])
    })

    it('Sort Many elements', (): void => {
        const sortedList: SortedList = new SortedList()
        sortedList.add(3)
        sortedList.add(1)
        sortedList.add(2)

        expect(sortedList.toArray())
            .toEqual([1, 2, 3])
    })
})
