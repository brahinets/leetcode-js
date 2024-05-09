import {maximumHappinessSum} from '../script'

describe('3075. Maximize Happiness of Selected Children', (): void => {

    it('Multiple will be happy', (): void => {
        expect(maximumHappinessSum([1, 2, 3], 2))
            .toBe(4)
    })

    it('The only one of multiple chosen is happy', (): void => {
        expect(maximumHappinessSum([1, 1, 1, 1], 2))
            .toBe(1)
    })

    it('The only chosen is happy', (): void => {
        expect(maximumHappinessSum([2, 3, 4, 5], 1))
            .toBe(5)
    })
})

