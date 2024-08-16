import {maxDistance} from '../script'

describe('624. Maximum Distance in Arrays', (): void => {

    it('Positive distance', (): void => {
        expect(maxDistance([[1, 2, 3], [4, 5], [1, 2, 3]]))
            .toBe(4)
    })

    it('Zero distance', (): void => {
        expect(maxDistance([[1], [1]]))
            .toBe(0)
    })
})
