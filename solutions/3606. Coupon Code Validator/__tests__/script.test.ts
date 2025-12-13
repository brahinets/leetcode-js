import {validateCoupons} from '../script'

describe('3606. Coupon Code Validator', (): void => {
    it('Multiple coupons are valid', (): void => {
        expect(validateCoupons(
            ["SAVE20", "", "PHARMA5", "SAVE@20"],
            ["restaurant", "grocery", "pharmacy", "restaurant"],
            [true, true, true, true])
        ).toEqual(["PHARMA5", "SAVE20"])
    })

    it('Only one coupon is valid', (): void => {
        expect(validateCoupons(
            ["GROCERY15", "ELECTRONICS_50", "DISCOUNT10"],
            ["grocery", "electronics", "invalid"],
            [false, true, true])
        ).toEqual(["ELECTRONICS_50"])
    })

    it('Sorting', (): void => {
        expect(validateCoupons(
            ["MI", "b_"],
            ["pharmacy", "pharmacy"],
            [true, true])
        ).toEqual(["MI", "b_"])
    })

    it('Sorting 2', (): void => {
        expect(validateCoupons(
            ["Qf8NjqOTYp", "w4xOTEM20C"],
            ["pharmacy", "pharmacy"],
            [true, true])
        ).toEqual(["Qf8NjqOTYp", "w4xOTEM20C"])
    })
})
