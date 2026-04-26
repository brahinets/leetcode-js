import { containsCycle } from '../script'

describe('1559. Detect Cycles in 2D Grid', (): void => {

    it('2x2 grid of same character forms a cycle', (): void => {
        expect(containsCycle([
            ['a', 'a'],
            ['a', 'a'],
        ])).toBe(true)
    })

    it('all different adjacent characters returns false', (): void => {
        expect(containsCycle([
            ['a', 'b'],
            ['b', 'a'],
        ])).toBe(false)
    })

    it('single row with same characters has no cycle', (): void => {
        expect(containsCycle([['a', 'a', 'a']])).toBe(false)
    })

    it('single column with same characters has no cycle', (): void => {
        expect(containsCycle([['a'], ['a'], ['a']])).toBe(false)
    })

    it('inner 2x2 block of same character forms a cycle', (): void => {
        expect(containsCycle([
            ['a', 'b', 'b'],
            ['b', 'z', 'z'],
            ['b', 'z', 'z'],
        ])).toBe(true)
    })

    it('outer ring of same character forms a cycle', (): void => {
        expect(containsCycle([
            ['a', 'a', 'a', 'a'],
            ['a', 'b', 'b', 'a'],
            ['a', 'b', 'b', 'a'],
            ['a', 'a', 'a', 'a'],
        ])).toBe(true)
    })

    it('grid with no repeated adjacent same characters returns false', (): void => {
        expect(containsCycle([
            ['a', 'b'],
            ['c', 'd'],
        ])).toBe(false)
    })

})
