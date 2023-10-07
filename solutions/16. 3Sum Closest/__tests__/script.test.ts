import {threeSumClosest} from '../script'

describe('16. 3Sum Closest', (): void => {
    it('All form closest', (): void => {
        expect(threeSumClosest([0, 0, 0], 1))
            .toBe(0)
    })

    it('All form exact', (): void => {
        expect(threeSumClosest([0, 0, 1], 1))
            .toBe(1)
    })

    it('Some form closest', (): void => {
        expect(threeSumClosest([-1, 2, 1, -4], 1))
            .toBe(2)
    })

    it('Some form exact', (): void => {
        expect(threeSumClosest([-1, 1, 1, -4], 1))
            .toBe(1)
    })
})
