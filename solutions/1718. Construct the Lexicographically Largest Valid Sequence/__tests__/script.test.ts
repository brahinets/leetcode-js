import {constructDistancedSequence} from '../script'

describe('1718. Construct the Lexicographically Largest Valid Sequence', (): void => {
    it('One', (): void => {
        expect(constructDistancedSequence(3))
            .toEqual([3, 1, 2, 3, 2])
    })

    // Explanation: [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.

    it('Two', (): void => {
        expect(constructDistancedSequence(5))
            .toEqual([5, 3, 1, 4, 3, 5, 2, 4, 2])
    })
})
