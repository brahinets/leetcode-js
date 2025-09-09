import {peopleAwareOfSecret} from '../script'

describe('2327. Number of People Aware of a Secret', (): void => {
    it('One', (): void => {
        expect(peopleAwareOfSecret(6, 2, 4))
            .toEqual(5)
    })

    it('Two', (): void => {
        expect(peopleAwareOfSecret(4, 1, 3))
            .toEqual(6)
    })
})
