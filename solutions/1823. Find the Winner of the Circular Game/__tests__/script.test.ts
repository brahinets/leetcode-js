import {findTheWinner} from '../script'

describe('1823. Find the Winner of the Circular Game', (): void => {
    it('First', (): void => {
        expect(findTheWinner(5, 2))
            .toBe(3)
    })

    it('Second', (): void => {
        expect(findTheWinner(6, 5))
            .toBe(1)
    })
})
