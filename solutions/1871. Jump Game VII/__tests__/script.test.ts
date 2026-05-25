import {canReach} from '../script'

describe('1871. Jump Game VII', (): void => {
    it('reachable via two jumps', (): void => {
        expect(canReach('011010', 2, 3))
            .toBe(true)
    })

    it('unreachable due to blocked positions', (): void => {
        expect(canReach('01101110', 2, 3))
            .toBe(false)
    })

    it('already at destination', (): void => {
        expect(canReach('0', 1, 1))
            .toBe(true)
    })

    it('single jump to end', (): void => {
        expect(canReach('00', 1, 1))
            .toBe(true)
    })

    it('last position is blocked', (): void => {
        expect(canReach('01', 1, 1))
            .toBe(false)
    })

    it('wide jump range with sparse zeros', (): void => {
        expect(canReach('0000000', 2, 5))
            .toBe(true)
    })

    it('exact minimum jump needed', (): void => {
        expect(canReach('0010', 3, 3))
            .toBe(true)
    })

    it('all ones except endpoints unreachable with small jump', (): void => {
        expect(canReach('01110', 1, 2))
            .toBe(false)
    })
})
