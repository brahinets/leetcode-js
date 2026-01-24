import {minCut} from '../script'

describe('132. Palindrome Partitioning II', (): void => {
    it('aab requires 1 cut', (): void => {
        expect(minCut("aab"))
            .toBe(1)
    })

    it('single character needs no cuts', (): void => {
        expect(minCut("a"))
            .toBe(0)
    })

    it('two different characters need 1 cut', (): void => {
        expect(minCut("ab"))
            .toBe(1)
    })
})
