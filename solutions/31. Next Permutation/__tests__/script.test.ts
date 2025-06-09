import {nextPermutation} from '../script'

describe('31. Next Permutation', (): void => {
    it('Next change minor', (): void => {
        const numbers: number[] = [1, 2, 3]

        nextPermutation(numbers)

        expect(numbers).toEqual([1, 3, 2])
    })

    it('Next change minor 2', (): void => {
        const numbers: number[] = [1, 1, 5]

        nextPermutation(numbers)

        expect(numbers).toEqual([1, 5, 1])
    })

    it('Next change loop', (): void => {
        const numbers: number[] = [3, 2, 1]

        nextPermutation(numbers)

        expect(numbers).toEqual([1, 2, 3])
    })
})
