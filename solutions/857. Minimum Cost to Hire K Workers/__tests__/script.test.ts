import {mincostToHireWorkers} from '../script'

describe('857. Minimum Cost to Hire K Workers', (): void => {

    it('Integer payment', (): void => {
        expect(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2))
            .toBe(105)
    })

    it('Floating payment', (): void => {
        expect(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3))
            .toBeCloseTo(30.66667, 5)
    })
})
