import { canReach } from '../script'

describe('1306. Jump Game III', (): void => {

    it('reachable via two paths', (): void => {
        expect(canReach([4, 2, 3, 0, 3, 1, 2], 5))
            .toBe(true)
    })

    it('reachable from start index zero', (): void => {
        expect(canReach([4, 2, 3, 0, 3, 1, 2], 0))
            .toBe(true)
    })

    it('unreachable zero', (): void => {
        expect(canReach([3, 0, 2, 1, 2], 2))
            .toBe(false)
    })

    it('single element with value zero', (): void => {
        expect(canReach([0], 0))
            .toBe(true)
    })

    it('single element with non-zero value', (): void => {
        expect(canReach([3], 0))
            .toBe(false)
    })

    it('start at zero value index', (): void => {
        expect(canReach([1, 0, 3], 1))
            .toBe(true)
    })

    it('all zeros', (): void => {
        expect(canReach([0, 0, 0], 1))
            .toBe(true)
    })

    it('two elements with reachable zero', (): void => {
        expect(canReach([1, 0], 0))
            .toBe(true)
    })
})
