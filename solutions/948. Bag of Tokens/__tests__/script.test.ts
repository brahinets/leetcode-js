import {bagOfTokensScore} from '../script'

describe('948. Bag of Tokens', (): void => {

    it('Only face up', (): void => {
        expect(bagOfTokensScore([100], 50))
            .toBe(0)
    })

    it('Only face down', (): void => {
        expect(bagOfTokensScore([200, 100], 150))
            .toBe(1)
    })

    it('Different', (): void => {
        expect(bagOfTokensScore([100, 200, 300, 400], 200))
            .toBe(2)
    })
})
