import {maxDistance} from '../script'

describe('3443. Maximum Manhattan Distance After K Changes', (): void => {
    it('One', (): void => {
        expect(maxDistance("NWSE", 1))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(maxDistance("NSWWEW", 3))
            .toBe(6)
    })
})
