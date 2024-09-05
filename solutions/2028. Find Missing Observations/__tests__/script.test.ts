import {missingRolls} from '../script'

describe('2028. Find Missing Observations', (): void => {
    it('One', (): void => {
        expect(missingRolls([3, 2, 4, 3], 4, 2))
            .toEqual([6, 6])
    })

    it('Two', (): void => {
        expect(missingRolls([1, 5, 6], 3, 4))
            .toEqual([3, 2, 2, 2])
    })

    it('It is impossible for the mean to be requested', (): void => {
        expect(missingRolls([1, 2, 3, 4], 6, 4))
            .toEqual([])
    })
})
