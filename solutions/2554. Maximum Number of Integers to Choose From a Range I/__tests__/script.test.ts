import {maxCount} from '../script'

describe('2554. Maximum Number of Integers to Choose From a Range I', (): void => {
    it('No options', (): void => {
        expect(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1))
            .toBe(0)
    })

    it('One option', (): void => {
        expect(maxCount([1, 6, 5], 5, 6))
            .toBe(2)
    })

    it('Multiple options', (): void => {
        expect(maxCount([11], 7, 50))
            .toBe(7)
    })
})
