import {validSequence} from '../script'

describe('3302. Find the Lexicographically Smallest Valid Sequence', (): void => {
    it('single change needed at the first index', (): void => {
        expect(validSequence('vbcca', 'abc'))
            .toEqual([0, 1, 2])
    })

    it('single change needed in the middle', (): void => {
        expect(validSequence('bacdc', 'abc'))
            .toEqual([1, 2, 4])
    })

    it('no valid sequence exists', (): void => {
        expect(validSequence('aaaaaa', 'aaabc'))
            .toEqual([])
    })

    it('exact match without any change', (): void => {
        expect(validSequence('abcabc', 'abc'))
            .toEqual([0, 1, 2])
    })

    it('change used at the last index', (): void => {
        expect(validSequence('aab', 'aac'))
            .toEqual([0, 1, 2])
    })
})
