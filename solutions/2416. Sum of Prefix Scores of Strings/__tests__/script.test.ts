import {sumPrefixScores} from '../script'

describe('2416. Sum of Prefix Scores of Strings', (): void => {

    it('Multiple prefixes', (): void => {
        expect(sumPrefixScores(["abc", "ab", "bc", "b"]))
            .toEqual([5, 4, 3, 2])
    })

    it('The only prefix', (): void => {
        expect(sumPrefixScores(["abcd"]))
            .toEqual([4])
    })
})
