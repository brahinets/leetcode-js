import {deckRevealedIncreasing} from '../script'

describe('950. Reveal Cards In Increasing Order', (): void => {

    it('Will be increasing', (): void => {
        expect(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]))
            .toEqual([2, 13, 3, 11, 5, 17, 7])
    })

    it('Already increasing', (): void => {
        expect(deckRevealedIncreasing([1, 1000]))
            .toEqual([1, 1000])
    })
})
