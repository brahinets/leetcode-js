import {minimumCost} from '../script'

describe('2976. Minimum Cost to Convert String I', (): void => {
    it('Convert different', (): void => {
        expect(minimumCost("abcd", "acbe", ["a", "b", "c", "c", "e", "d"], ["b", "c", "b", "e", "b", "e"], [2, 5, 5, 1, 2, 20]))
            .toBe(28)
    })

    it('Convert different #2', (): void => {
        expect(minimumCost("abadcdadac", "baddbccdac", ["d", "c", "d", "c", "b", "a"], ["b", "b", "c", "a", "d", "d"], [8, 5, 9, 1, 10, 2]))
            .toBe(57)
    })

    it('Convert the same', (): void => {
        expect(minimumCost("aaaa", "bbbb", ["a", "c"], ["c", "b"], [1, 2]))
            .toBe(12)
    })

    it('Impossible to convert', (): void => {
        expect(minimumCost("abcd", "abce", ["a"], ["e"], [10000]))
            .toBe(-1)
    })
})
