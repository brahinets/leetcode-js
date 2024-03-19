import {leastInterval} from '../script'

describe('621. Task Scheduler', (): void => {

    it('No extra idle', (): void => {
        expect(leastInterval(["A", "C", "A", "B", "D", "B"], 1))
            .toBe(6)
    })

    it('Small extra idle', (): void => {
        expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2))
            .toBe(8)
    })

    it('Long extra idle', (): void => {
        expect(leastInterval(["A", "A", "A", "B", "B", "B"], 3))
            .toBe(10)
    })
})
