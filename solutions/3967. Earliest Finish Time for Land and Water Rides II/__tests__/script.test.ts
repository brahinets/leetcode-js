import { earliestFinishTime } from '../script'

describe('3967. Earliest Finish Time for Land and Water Rides II', (): void => {
    it('land then water with no waiting between rides', (): void => {
        expect(earliestFinishTime([2, 8], [4, 1], [6], [3]))
            .toBe(9)
    })

    it('water first is better when water starts earlier', (): void => {
        expect(earliestFinishTime([5], [3], [1], [10]))
            .toBe(14)
    })

    it('single ride each, land opens first and finishes before water', (): void => {
        expect(earliestFinishTime([1], [2], [5], [1]))
            .toBe(6)
    })

    it('single ride each, water opens first and finishes before land', (): void => {
        expect(earliestFinishTime([3], [2], [1], [1]))
            .toBe(5)
    })

    it('multiple land and water rides with overlapping windows', (): void => {
        expect(earliestFinishTime([1, 5], [3, 2], [2, 6], [4, 1]))
            .toBe(7)
    })

    it('best water ride to board after land is not the first one sorted by start', (): void => {
        expect(earliestFinishTime([1], [1], [1, 2], [100, 1]))
            .toBe(3)
    })

    it('second ride must wait for opening after first finishes', (): void => {
        expect(earliestFinishTime([1], [1], [10], [5]))
            .toBe(15)
    })
})
