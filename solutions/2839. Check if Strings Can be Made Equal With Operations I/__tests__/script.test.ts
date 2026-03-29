import { canBeEqual } from '../script'

describe('2839. Check if Strings Can be Made Equal With Operations I', (): void => {
    it('returns true when even and odd positions can be rearranged to match', (): void => {
        expect(canBeEqual('abcd', 'cdab'))
            .toBe(true)
    })

    it('returns false when positions cannot be rearranged to match', (): void => {
        expect(canBeEqual('abcd', 'dacb'))
            .toBe(false)
    })

    it('returns true for identical strings', (): void => {
        expect(canBeEqual('abcd', 'abcd'))
            .toBe(true)
    })

    it('returns false when even position chars differ', (): void => {
        expect(canBeEqual('abcd', 'xbyd'))
            .toBe(false)
    })

    it('returns false when odd position chars differ', (): void => {
        expect(canBeEqual('abcd', 'axcy'))
            .toBe(false)
    })
})
