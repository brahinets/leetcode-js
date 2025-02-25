import {twoSum} from '../script'

describe('1. Two Sum', (): void => {
    it('One', (): void => {
        expect(twoSum([2, 7, 11, 15], 9))
            .toEqual([0, 1])
    })

    it('Two', (): void => {
        expect(twoSum([3, 2, 4], 6))
            .toEqual([1, 2])
    })

    it('Three', (): void => {
        expect(twoSum([3, 3], 6))
            .toEqual([0, 1])
    })

    it('Not found', (): void => {
        expect(() => twoSum([3, 3], 5))
            .toThrow("Match not found")
    })
})
