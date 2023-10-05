import {majorityElement} from '../script'

describe('229. Majority Element II', (): void => {
    it('Major the only', (): void => {
        expect(majorityElement([1]))
            .toStrictEqual([1])
    })

    it('Major by half', (): void => {
        expect(majorityElement([1, 2]))
            .toStrictEqual([1, 2])
    })

    it('Some are major', (): void => {
        expect(majorityElement([3, 2, 3]))
            .toStrictEqual([3])
    })
})
