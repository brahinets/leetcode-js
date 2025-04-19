import {winnerOfGame} from '../script'

describe('2038. Remove Colored Pieces if Both Neighbors are the Same Color', (): void => {
    it('Can', (): void => {
        expect(winnerOfGame("AAABABB"))
            .toBe(true)
    })

    it('Cannot quickly', (): void => {
        expect(winnerOfGame("AA"))
            .toBe(false)
    })

    it('Cannot longer', (): void => {
        expect(winnerOfGame("ABBBBBBBAAA"))
            .toBe(false)
    })
})
