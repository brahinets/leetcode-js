import { minimumCost } from '../script'

describe('2977. Minimum Cost to Convert String II', (): void => {
    it('Single character conversions', (): void => {
        expect(minimumCost(
            'abcd',
            'acbe',
            ['a', 'b', 'c', 'c', 'e', 'd'],
            ['b', 'c', 'b', 'e', 'b', 'e'],
            [2, 5, 5, 1, 2, 20]
        )).toBe(28)
    })

    it('Substring conversions with chaining', (): void => {
        expect(minimumCost(
            'abcdefgh',
            'acdeeghh',
            ['bcd', 'fgh', 'thh'],
            ['cde', 'thh', 'ghh'],
            [1, 3, 5]
        )).toBe(9)
    })

    it('Impossible due to overlapping substrings', (): void => {
        expect(minimumCost(
            'abcdefgh',
            'addddddd',
            ['bcd', 'defgh'],
            ['ddd', 'ddddd'],
            [100, 1578]
        )).toBe(-1)
    })
})
