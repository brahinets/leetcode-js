import {twoSum} from '../script'

describe('167. Two Sum II - Input Array Is Sorted', (): void => {
    it('No pair produce sum', (): void => {
        expect(twoSum([2, 7, 11, 15], 10))
            .toStrictEqual([-1, -1])
    })

    it('Only one pair produce sum', (): void => {
        expect(twoSum([2, 7, 11, 15], 9))
            .toStrictEqual([1, 2])
    })

    it('Only one pair produce sum #2', (): void => {
        expect(twoSum([2, 3, 4], 6))
            .toStrictEqual([1, 3])
    })


    it('All elements produce sum', (): void => {
        expect(twoSum([-1, 0], -1))
            .toStrictEqual([1, 2])
    })
})
