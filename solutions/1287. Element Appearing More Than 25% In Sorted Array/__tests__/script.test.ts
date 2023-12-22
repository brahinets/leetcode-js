import {findSpecialInteger} from '../script'

describe('1287. Element Appearing More Than 25% In Sorted Array', (): void => {

    it('No number', (): void => {
        expect(() => findSpecialInteger([]))
            .toThrow("No solution found")
    })

    it('The only number', (): void => {
        expect(findSpecialInteger([1, 1]))
            .toBe(1)
    })

    it('Most popular must be more that 25%', (): void => {
        expect(findSpecialInteger([1, 2, 3, 3]))
            .toBe(3)
    })

    it('Most popular is much more than 25%', (): void => {
        expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]))
            .toBe(6)
    })
})
