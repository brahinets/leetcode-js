import { furthestDistanceFromOrigin } from '../script'

describe('2833. Furthest Point From Origin', (): void => {

    it('only wildcards returns wildcard count', (): void => {
        expect(furthestDistanceFromOrigin('___'))
            .toBe(3)
    })

    it('equal L and R with wildcards returns wildcard count', (): void => {
        expect(furthestDistanceFromOrigin('L_R'))
            .toBe(1)
    })

    it('all same direction without wildcards returns move count', (): void => {
        expect(furthestDistanceFromOrigin('RRR'))
            .toBe(3)
    })

    it('wildcards add to dominant direction', (): void => {
        expect(furthestDistanceFromOrigin('_RL_'))
            .toBe(2)
    })

    it('single move returns 1', (): void => {
        expect(furthestDistanceFromOrigin('L'))
            .toBe(1)
    })

})
