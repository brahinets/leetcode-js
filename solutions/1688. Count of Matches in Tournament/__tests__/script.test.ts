import {numberOfMatches} from '../script'

describe('1688. Count of Matches in Tournament', (): void => {

    it('Even number of matches', (): void => {
        expect(numberOfMatches(7))
            .toBe(6)
    })

    it('Odd number of matches', (): void => {
        expect(numberOfMatches(14))
            .toBe(13)
    })
})


