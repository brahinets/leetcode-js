import {totalMoney} from '../script'

describe('1716. Calculate Money in Leetcode Bank', (): void => {

    it('Several days', (): void => {
        expect(totalMoney(4))
            .toBe(10)
    })

    it('Several weeks', (): void => {
        expect(totalMoney(10))
            .toBe(37)
    })

    it('Many weeks', (): void => {
        expect(totalMoney(20))
            .toBe(96)
    })
})


