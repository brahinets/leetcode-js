import { firstStableIndex } from '../script'

describe('3903. Smallest Stable Index I', (): void => {
    it('Positive index', (): void => {
        expect(firstStableIndex([5, 0, 1, 4], 3))
        .toEqual(3)
    })

    it('No such index', (): void => {
        expect(firstStableIndex([3, 2, 1], 1))
        .toEqual(-1)
    })

    it('First one', (): void => {
        expect(firstStableIndex([0], 0))
        .toEqual(0)
    })
})
