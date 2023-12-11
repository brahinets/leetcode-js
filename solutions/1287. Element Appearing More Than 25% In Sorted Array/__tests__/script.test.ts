import {findSpecialInteger} from '../script'

describe('1287. Element Appearing More Than 25% In Sorted Array', (): void => {

    it('The only number', (): void => {
        expect(findSpecialInteger([1, 1]))
            .toBe(1)
    })

    it('Most popular', (): void => {
        expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]))
            .toBe(6)
    })
})
