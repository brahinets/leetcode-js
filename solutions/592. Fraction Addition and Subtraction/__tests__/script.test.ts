import {fractionAddition} from '../script'

describe('592. Fraction Addition and Subtraction', (): void => {
    it('Same fraction', (): void => {
        expect(fractionAddition("-1/2+1/2"))
            .toEqual("0/1")
    })

    it('Negative and different fraction', (): void => {
        expect(fractionAddition("-1/2+1/2+1/3"))
            .toEqual("1/3")
    })

    it('Different fraction', (): void => {
        expect(fractionAddition("1/3-1/2"))
            .toEqual("-1/6")
    })
})
