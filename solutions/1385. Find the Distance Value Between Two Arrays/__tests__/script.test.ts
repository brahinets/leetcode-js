import { findTheDistanceValue } from '../script'

describe('1385. Find the Distance Value Between Two Arrays', (): void => {
    it('some elements are too close', (): void => {
        const firstArray: number[] = [4, 5, 8]
        const secondArray: number[] = [10, 9, 1, 8]
        const result: number = findTheDistanceValue(firstArray, secondArray, 2)

        expect(result)
            .toEqual(2)
    })

    it('negative values in second array', (): void => {
        const firstArray: number[] = [1, 4, 2, 3]
        const secondArray: number[] = [-4, -3, 6, 10, 20, 30]
        const result: number = findTheDistanceValue(firstArray, secondArray, 3)

        expect(result)
            .toEqual(2)
    })

    it('large element far from all', (): void => {
        const firstArray: number[] = [2, 1, 100, 3]
        const secondArray: number[] = [-5, -2, 10, -3, 7]
        const result: number = findTheDistanceValue(firstArray, secondArray, 6)

        expect(result)
            .toEqual(1)
    })

    it('zero distance counts only elements absent from second array', (): void => {
        const firstArray: number[] = [1, 2, 3]
        const secondArray: number[] = [2]
        const result: number = findTheDistanceValue(firstArray, secondArray, 0)

        expect(result)
            .toEqual(2)
    })

    it('single elements within distance', (): void => {
        const firstArray: number[] = [0]
        const secondArray: number[] = [100]
        const result: number = findTheDistanceValue(firstArray, secondArray, 100)

        expect(result)
            .toEqual(0)
    })
})
