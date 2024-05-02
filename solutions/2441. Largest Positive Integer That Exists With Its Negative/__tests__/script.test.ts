import {findMaxK} from '../script'

describe('2441. Largest Positive Integer That Exists With Its Negative', (): void => {
    it('Found the only', (): void => {
        expect(findMaxK([-1, 2, -3, 3]))
            .toBe(3)
    })

    it('Found multiple. Return bigger', (): void => {
        expect(findMaxK([-1, 10, 6, 7, -7, 1]))
            .toBe(7)
    })

    it('Тще ащгтв', (): void => {
        expect(findMaxK([-10, 8, 6, 7, -2, -3]))
            .toBe(-1)
    })
})
