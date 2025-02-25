import {getLucky} from '../script'

describe('1945. Sum of Digits of String After Convert', (): void => {
    it('One time', (): void => {
        expect(getLucky("iiii", 1))
            .toBe(36)
    })

    it('Two times', (): void => {
        expect(getLucky("leetcode", 2))
            .toBe(6)
    })

    it('Two times', (): void => {
        expect(getLucky("zbax", 2))
            .toBe(8)
    })
})
