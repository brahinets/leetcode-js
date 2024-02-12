import {majorityElement} from '../script'

describe('169. Majority Element', (): void => {

    it('One', (): void => {
        expect(majorityElement([3, 2, 3]))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2]))
            .toBe(2)
    })
})
