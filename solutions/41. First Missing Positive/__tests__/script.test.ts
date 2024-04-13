import {firstMissingPositive} from '../script'

describe('41. First Missing Positive', (): void => {

    it('First is missing', (): void => {
        expect(firstMissingPositive([7, 8, 9, 11, 12]))
            .toBe(1)
    })

    it('Middle is missing', (): void => {
        expect(firstMissingPositive([3, 4, -1, 1]))
            .toBe(2)
    })

    it('Last is missing', (): void => {
        expect(firstMissingPositive([1, 2, 0]))
            .toBe(3)
    })
})
