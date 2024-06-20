import {maxDistance} from '../script'

describe('1552. Magnetic Force Between Two Balls', (): void => {

    it('Normal force', (): void => {
        expect(maxDistance([1, 2, 3, 4, 7], 3))
            .toBe(3)
    })

    it('Very big force', (): void => {
        expect(maxDistance([5, 4, 3, 2, 1, 1000000000], 2))
            .toBe(999999999)
    })
})
