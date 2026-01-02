import {repeatedNTimes} from '../script'

describe('961. N-Repeated Element in Size 2N Array', (): void => {
    it('Last number repeated n times', (): void => {
        expect(repeatedNTimes([1, 2, 3, 3]))
            .toBe(3)
    })

    it('Some number repeated n times', (): void => {
        expect(repeatedNTimes([2, 1, 2, 5, 3, 2]))
            .toBe(2)
    })

    it('First number repeated n times', (): void => {
        expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))
            .toBe(5)
    })

    it('No repeating numbers. Illegal state', (): void => {
        expect((): number => repeatedNTimes([1, 2, 3, 4, 5]))
            .toThrow('Illegal state. No repeated element found')
    })
})
