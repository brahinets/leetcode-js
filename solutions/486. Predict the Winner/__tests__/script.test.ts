import {predictTheWinner} from '../script'

describe('486. Predict the Winner', (): void => {
    it('Cannot win', (): void => {
        expect(predictTheWinner([1, 5, 2]))
            .toBe(false)
    })

    it('Can win easy', (): void => {
        expect(predictTheWinner([1, 5, 233, 7]))
            .toBe(true)
    })

    it('Can win by equality', (): void => {
        expect(predictTheWinner([1, 1, 1, 1]))
            .toBe(true)
    })
})
