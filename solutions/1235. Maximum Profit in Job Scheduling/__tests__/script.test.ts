import {jobScheduling} from '../script'

describe('859. Buddy Strings', (): void => {

    it('No jobs', (): void => {
        expect(jobScheduling([], [], []))
            .toBe(0)
    })

    it('Edge jobs', (): void => {
        expect(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]))
            .toBe(120)
    })

    it('Multiple jobs', (): void => {
        expect(jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60]))
            .toBe(150)
    })

    it('One job', (): void => {
        expect(jobScheduling([1, 1, 1], [2, 3, 4], [5, 6, 4]))
            .toBe(6)
    })
})
