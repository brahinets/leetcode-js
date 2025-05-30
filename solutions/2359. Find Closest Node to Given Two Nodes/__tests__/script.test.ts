import {closestMeetingNode} from '../script'

describe('2359. Find Closest Node to Given Two Nodes', (): void => {
    it('Unique closest', (): void => {
        expect(closestMeetingNode([2, 2, 3, -1], 0, 1))
            .toBe(2)
    })

    it('Unique closest #2', (): void => {
        expect(closestMeetingNode([1, 2, -1], 0, 2))
            .toBe(2)
    })

    it('Multiple closest', (): void => {
        expect(closestMeetingNode([1, 2, 3, -1, 4, 5], 0, 3))
            .toBe(3)
    })

    it('No closest', (): void => {
        expect(closestMeetingNode([1, 2, -1, 4, 5, -1], 0, 3))
            .toBe(-1)
    })
})
