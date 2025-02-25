import {maxAscendingSum} from '../script'

describe('1800. Maximum Ascending Subarray Sum', (): void => {
    it('Second ascending', (): void => {
        expect(maxAscendingSum([10, 20, 30, 5, 10, 50]))
            .toBe(65)
    })

    it('Full ascending', (): void => {
        expect(maxAscendingSum([10, 20, 30, 40, 50]))
            .toBe(150)
    })

    it('The only ascending', (): void => {
        expect(maxAscendingSum([17, 15, 13, 10, 11, 12]))
            .toBe(33)
    })

    it('The only ascending simple', (): void => {
        expect(maxAscendingSum([1]))
            .toBe(1)
    })
})
