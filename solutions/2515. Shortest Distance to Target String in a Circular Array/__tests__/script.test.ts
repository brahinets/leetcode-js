import { closestTarget } from '../script'

describe('2515. Shortest Distance to Target String in a Circular Array', (): void => {

    it('returns shortest forward distance when target is closer going forward', (): void => {
        expect(closestTarget(['hello', 'i', 'am', 'leetcode', 'hello'], 'hello', 1))
            .toBe(1)
    })

    it('returns shortest backward distance when wrapping around is shorter', (): void => {
        expect(closestTarget(['a', 'b', 'leetcode'], 'leetcode', 0))
            .toBe(1)
    })

    it('returns zero when target is at start index', (): void => {
        expect(closestTarget(['i', 'eat', 'leetcode'], 'i', 0))
            .toBe(0)
    })

    it('returns negative one when target is not in array', (): void => {
        expect(closestTarget(['i', 'eat', 'leetcode'], 'ate', 0))
            .toBe(-1)
    })

    it('returns minimum among multiple occurrences of target', (): void => {
        expect(closestTarget(['a', 'b', 'a', 'c', 'a'], 'a', 2))
            .toBe(0)
    })

    it('returns shortest when only one occurrence and it wraps', (): void => {
        expect(closestTarget(['a', 'b', 'c', 'd'], 'a', 3))
            .toBe(1)
    })

})
