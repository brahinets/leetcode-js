import {integerBreak} from '../script'

describe('343. Integer Break', (): void => {
    it('No break possible', (): void => {
        expect(integerBreak(2))
            .toBe(1)
    })

    it('The only break', (): void => {
        expect(integerBreak(10))
            .toBe(36)
    })
})
