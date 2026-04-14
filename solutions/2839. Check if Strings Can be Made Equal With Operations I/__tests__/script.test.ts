import { canBeEqual } from '../script'

describe('2839. Check if Strings Can be Made Equal With Operations I', (): void => {
    it('true when even and odd positions can be rearranged to match', (): void => {
        expect(canBeEqual('abcd', 'cdab'))
            .toBe(true)
    })

    it('false when positions cannot be rearranged to match', (): void => {
        expect(canBeEqual('abcd', 'dacb'))
            .toBe(false)
    })

    it('true for identical strings', (): void => {
        expect(canBeEqual('abcd', 'abcd'))
            .toBe(true)
    })

    it('false when even position chars differ', (): void => {
        expect(canBeEqual('abcd', 'xbyd'))
            .toBe(false)
    })

    it('false when odd position chars differ', (): void => {
        expect(canBeEqual('abcd', 'axcy'))
            .toBe(false)
    })
})
