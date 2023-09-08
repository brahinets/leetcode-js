import {threeSum} from '../script'

describe('1. Two Sum', (): void => {
    it('No triplets', (): void => {
        expect(threeSum([0, 1, 1]))
            .toStrictEqual([])
    })

    it('One triplet', (): void => {
        expect(threeSum([0, 0, 0]))
            .toStrictEqual([[0, 0, 0]])
    })

    it('Multiple triplets', (): void => {
        const actual: number[][] = threeSum([-1, 0, 1, 2, -1, -4])

        expect(actual.length).toBe(2)
        expect(actual).toContainEqual([-1, -1, 2])
        expect(actual).toContainEqual([-1, 0, 1])
    })
})
