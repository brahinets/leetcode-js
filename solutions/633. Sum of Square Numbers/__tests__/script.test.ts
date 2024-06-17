import {judgeSquareSum} from '../script'

describe('633. Sum of Square Numbers', (): void => {

    it('Yes', (): void => {
        expect(judgeSquareSum(5))
            .toBe(true)
    })

    it('No', (): void => {
        expect(judgeSquareSum(3))
            .toBe(false)
    })
})
