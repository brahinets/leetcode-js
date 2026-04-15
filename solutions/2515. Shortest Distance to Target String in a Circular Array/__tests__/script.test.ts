import { closetTarget } from '../script'

describe('2515. Shortest Distance to Target String in a Circular Array', (): void => {

    it('returns shortest forward distance when target is closer going forward', (): void => {
        expect(closetTarget(['hello', 'i', 'am', 'leetcode', 'hello'], 'hello', 1))
            .toBe(1)
    })

    it('returns shortest backward distance when wrapping around is shorter', (): void => {
        expect(closetTarget(['a', 'b', 'leetcode'], 'leetcode', 0))
            .toBe(1)
    })

    it('returns zero when target is at start index', (): void => {
        expect(closetTarget(['i', 'eat', 'leetcode'], 'i', 0))
            .toBe(0)
    })

    it('returns negative one when target is not in array', (): void => {
        expect(closetTarget(['i', 'eat', 'leetcode'], 'ate', 0))
            .toBe(-1)
    })

    it('returns minimum among multiple occurrences of target', (): void => {
        expect(closetTarget(['a', 'b', 'a', 'c', 'a'], 'a', 2))
            .toBe(0)
    })

    it('returns shortest when only one occurrence and it wraps', (): void => {
        expect(closetTarget(['a', 'b', 'c', 'd'], 'a', 3))
            .toBe(1)
    })

})
