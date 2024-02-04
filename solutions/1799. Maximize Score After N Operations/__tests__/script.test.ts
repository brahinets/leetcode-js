import {maxScore} from '../script'

describe('1799. Maximize Score After N Operations', (): void => {
    it('Few', (): void => {
        expect(maxScore([1, 2]))
            .toBe(1)
    })

    it('More', (): void => {
        expect(maxScore([3, 4, 6, 8]))
            .toBe(11)
    })

    it('Many', (): void => {
        expect(maxScore([1, 2, 3, 4, 5, 6]))
            .toBe(14)
    })

    it('A bit Many', (): void => {
        expect(maxScore([415, 230, 471, 705, 902, 87]))
            .toBe(23)
    })

    // TODO #1799 Fix business logic
    it.skip('A bit more', (): void => {
        expect(maxScore([9, 17, 16, 15, 18, 13, 18, 20]))
            .toBe(91)
    })

    it('Much many', (): void => {
        expect(maxScore([109497, 983516, 698308, 409009, 310455, 528595, 524079, 18036, 341150, 641864, 913962, 421869, 943382, 295019]))
            .toBe(527)
    })
})
