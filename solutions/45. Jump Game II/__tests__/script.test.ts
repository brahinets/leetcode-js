import {jump} from '../script'

describe('45. Jump Game II', (): void => {
    it('One', (): void => {
        expect(jump([2, 3, 1, 1, 4]))
            .toBe(2)
    })

    it('Two', (): void => {
        expect(jump([2, 3, 0, 1, 4]))
            .toBe(2)
    })
})
