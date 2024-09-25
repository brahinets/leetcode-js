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

    it('Many prefixes', (): void => {
        expect(sumPrefixScores(["qtcqcmwcin", "vkjotbrbzn", "eoorlyfche", "eoorlyhn", "eoorlyfcxk", "qfnmjilcom", "eoorlyfche", "qtcqcmwcnl", "qtcqcrpjr"]))
            .toEqual([24, 10, 34, 26, 32, 13, 34, 24, 20])
    })
})
