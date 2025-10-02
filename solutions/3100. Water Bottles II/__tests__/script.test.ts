import {maxBottlesDrunk} from '../script'

describe('3100. Water Bottles II', (): void => {
    it('One', (): void => {
        expect(maxBottlesDrunk(13, 6))
            .toBe(15)
    })

    it('Two', (): void => {
        expect(maxBottlesDrunk(10, 3))
            .toBe(13)
    })
})
