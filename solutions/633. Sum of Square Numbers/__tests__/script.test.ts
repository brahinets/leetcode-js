import {judgeSquareSum} from '../script'

describe('633. Sum of Square Numbers', (): void => {

    it('Yes with multiple positive', (): void => {
        expect(judgeSquareSum(5))
            .toBe(true)
    })

    it('Yes with one positive', (): void => {
        expect(judgeSquareSum(1))
            .toBe(true)
    })

    it('Yes with none positive', (): void => {
        expect(judgeSquareSum(0))
            .toBe(true)
    })

    it('No', (): void => {
        expect(judgeSquareSum(3))
            .toBe(false)
    })

    it('No. Load test', (): void => {
        expect(judgeSquareSum(2147482647))
            .toBe(false)
    })
})
