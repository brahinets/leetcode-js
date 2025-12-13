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
})
