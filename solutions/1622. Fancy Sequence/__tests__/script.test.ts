import { Fancy } from '../script'

describe('1622. Fancy Sequence', (): void => {
    it('handles the example sequence of operations', (): void => {
        const fancy: Fancy: Fancy = new Fancy()
        fancy.append(2)
        fancy.addAll(3)
        fancy.append(7)
        fancy.multAll(2)
        expect(fancy.getIndex(0))
            .toBe(10)
        fancy.addAll(3)
        fancy.append(10)
        fancy.multAll(2)
        expect(fancy.getIndex(0))
            .toBe(26)
        expect(fancy.getIndex(1))
            .toBe(34)
        expect(fancy.getIndex(2))
            .toBe(20)
    })

    it('returns -1 for out-of-bounds index', (): void => {
        const fancy: Fancy: Fancy = new Fancy()
        fancy.append(5)
        expect(fancy.getIndex(1))
            .toBe(-1)
        expect(fancy.getIndex(100))
            .toBe(-1)
    })

    it('returns correct value without any addAll or multAll', (): void => {
        const fancy: Fancy: Fancy = new Fancy()
        fancy.append(3)
        fancy.append(7)
        expect(fancy.getIndex(0))
            .toBe(3)
        expect(fancy.getIndex(1))
            .toBe(7)
    })

    it('applies addAll to all existing elements but not newly appended', (): void => {
        const fancy: Fancy: Fancy = new Fancy()
        fancy.append(1)
        fancy.append(2)
        fancy.addAll(10)
        fancy.append(3)
        expect(fancy.getIndex(0))
            .toBe(11)
        expect(fancy.getIndex(1))
            .toBe(12)
        expect(fancy.getIndex(2))
            .toBe(3)
    })

    it('applies multAll to all existing elements but not newly appended', (): void => {
        const fancy: Fancy = new Fancy()
        fancy.append(2)
        fancy.append(4)
        fancy.multAll(3)
        fancy.append(5)
        expect(fancy.getIndex(0))
            .toBe(6)
        expect(fancy.getIndex(1))
            .toBe(12)
        expect(fancy.getIndex(2))
            .toBe(5)
    })

    it('returns result modulo 1e9+7', (): void => {
        const MOD = 1_000_000_007
        const fancy: Fancy = new Fancy()
        fancy.append(1_000_000_000)
        fancy.multAll(1_000_000_000)
        // 1e9 * 1e9 mod (1e9+7) = 1e18 mod (1e9+7) = 999999993000000049 mod (1e9+7)
        // = (1e9+7-1)^2 mod (1e9+7) = (-7)^2 = 49... wait let me compute properly
        // 1e9 mod (1e9+7) = 1e9
        // (1e9)^2 mod (1e9+7): use the fact that 1e9 = MOD - 7
        // (MOD-7)^2 = MOD^2 - 14*MOD + 49 ≡ 49 mod MOD
        expect(fancy.getIndex(0))
            .toBe(49)
    })
})
