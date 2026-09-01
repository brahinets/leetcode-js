import { minMoves } from '../script'

describe('3568. Minimum Moves to Clean the Classroom', (): void => {
    it('obstacle forces detour around blocked cell', (): void => {
        expect(minMoves(['S.', 'XL'], 2))
            .toBe(2)
    })

    it('reset area allows recharging energy mid path', (): void => {
        expect(minMoves(['LS', 'RL'], 4))
            .toBe(3)
    })

    it('insufficient energy with unreachable reset area', (): void => {
        expect(minMoves(['L.S', 'RXL'], 3))
            .toBe(-1)
    })

    it('no litter present in the grid', (): void => {
        expect(minMoves(['S.', '..'], 5))
            .toBe(0)
    })

    it('single cell grid containing only the start position', (): void => {
        expect(minMoves(['S'], 1))
            .toBe(0)
    })

    it('multiple litter cells collected in a straight corridor', (): void => {
        expect(minMoves(['SLLL'], 3))
            .toBe(3)
    })

    it('reset area required multiple times to reach all litter', (): void => {
        expect(minMoves(['SLRLRL'], 2))
            .toBe(5)
    })
})
