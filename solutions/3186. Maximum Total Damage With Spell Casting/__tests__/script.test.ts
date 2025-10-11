import {maximumTotalDamage} from '../script'

describe('3186. Maximum Total Damage With Spell Casting', (): void => {
    it('One', (): void => {
        expect(maximumTotalDamage([1, 1, 3, 4]))
            .toBe(6)
    })

    it('Two', (): void => {
        expect(maximumTotalDamage([7, 1, 6, 6]))
            .toBe(13)
    })
})
