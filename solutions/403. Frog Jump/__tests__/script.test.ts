import {canCross} from "../script";

describe('403. Frog Jump', (): void => {

    it('Can', (): void => {
        expect(canCross([0, 1, 3, 5, 6, 8, 12, 17]))
            .toBe(true)
    })

    it('Cannot', (): void => {
        expect(canCross([0, 1, 2, 3, 4, 8, 9, 11]))
            .toBe(false)
    })
})
