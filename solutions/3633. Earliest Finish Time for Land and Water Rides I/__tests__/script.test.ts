import { earliestFinishTime } from '../script'

describe('3633. Earliest Finish Time for Land and Water Rides I', (): void => {
    it('land then water: land finishes before water opens', (): void => {
        expect(earliestFinishTime([1], [2], [5], [1]))
            .toBe(6)
    })

    it('water then land is better when water opens first', (): void => {
        expect(earliestFinishTime([3], [2], [1], [1]))
            .toBe(5)
    })

    it('example: multiple rides, pick best combination', (): void => {
        expect(earliestFinishTime([1, 5], [3, 2], [2, 6], [4, 1]))
            .toBe(7)
    })

    it('single ride each, same start time', (): void => {
        expect(earliestFinishTime([2], [3], [2], [2]))
            .toBe(7)
    })

    it('second ride already open when first finishes', (): void => {
        expect(earliestFinishTime([1], [1], [1], [5]))
            .toBe(7)
    })
})
