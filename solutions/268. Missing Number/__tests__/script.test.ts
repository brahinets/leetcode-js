import {missingNumber} from '../script'

describe('268. Missing Number', (): void => {

    it('Last is missing', (): void => {
        expect(missingNumber([0, 1]))
            .toBe(2)
    })

    it('First is missing', (): void => {
        expect(missingNumber([3, 2, 1]))
            .toBe(0)
    })

    it('Middle is missing', (): void => {
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
            .toBe(8)
    })
})
