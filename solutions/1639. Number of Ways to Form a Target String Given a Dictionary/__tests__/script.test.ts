import {numWays} from '../script'

describe('1639. Number of Ways to Form a Target String Given a Dictionary', (): void => {
    it('One', (): void => {
        expect(numWays(["acca", "bbbb", "caca"], "aba"))
            .toBe(6)
    })

    it('Two', (): void => {
        expect(numWays(["abba", "baab"], "bab"))
            .toBe(4)
    })
})
