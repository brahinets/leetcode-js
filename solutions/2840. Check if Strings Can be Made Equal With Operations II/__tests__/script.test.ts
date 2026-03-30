import { checkStrings } from '../script'

describe('2840. Check if Strings Can be Made Equal With Operations II', (): void => {
    it('returns true when even and odd positions can be rearranged to match', (): void => {
        expect(checkStrings('abcdba', 'cabdab'))
            .toBe(true)
    })

    it('returns false when positions cannot be rearranged to match', (): void => {
        expect(checkStrings('abe', 'bea'))
            .toBe(false)
    })

    it('returns true for identical strings', (): void => {
        expect(checkStrings('abcdef', 'abcdef'))
            .toBe(true)
    })

    it('returns false when even position chars differ', (): void => {
        expect(checkStrings('abcdef', 'xbydez'))
            .toBe(false)
    })

    it('returns false when odd position chars differ', (): void => {
        expect(checkStrings('abcdef', 'axcyez'))
            .toBe(false)
    })
})
