import {maximumSwap} from '../script'

describe('670. Maximum Swap', (): void => {
    it('Swap', (): void => {
        expect(maximumSwap(2736))
            .toBe(7236)
    })

    it('No swap', (): void => {
        expect(maximumSwap(9973))
            .toBe(9973)
    })
})
