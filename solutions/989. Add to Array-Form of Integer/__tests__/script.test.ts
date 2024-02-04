import {addToArrayForm} from '../script'

describe('989. Add to Array-Form of Integer', (): void => {
    it('Sum of different radix operands led to same radix sum', (): void => {
        expect(addToArrayForm([1, 2, 0, 0], 34))
            .toStrictEqual([1, 2, 3, 4])
    })

    it('Sum of different radix operands led to same radix sum', (): void => {
        expect(addToArrayForm([9, 9, 9, 9], 2))
            .toStrictEqual([1, 0, 0, 0, 1])
    })

    it('Sum of same radix operands led to same radix sum', (): void => {
        expect(addToArrayForm([2, 7, 4], 181))
            .toStrictEqual([4, 5, 5])
    })

    it('Sum of same radix operands led to different radix sum', (): void => {
        expect(addToArrayForm([2, 1, 5], 806))
            .toStrictEqual([1, 0, 2, 1])
    })
})
