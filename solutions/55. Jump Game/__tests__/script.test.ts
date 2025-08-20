import {canJump} from '../script'

describe('55. Jump Game', (): void => {
    it('Can reach', (): void => {
        expect(canJump([2, 3, 1, 1, 4]))
            .toBe(true)
    })

    it('Cannot reach', (): void => {
        expect(canJump([3, 2, 1, 0, 4]))
            .toBe(false)
    })
})
