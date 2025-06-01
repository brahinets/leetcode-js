import {distributeCandies} from '../script'

describe('2929. Distribute Candies Among Children II', (): void => {
    it('One', (): void => {
        expect(distributeCandies(5, 2))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(distributeCandies(3, 3))
            .toBe(10)
    })
})
