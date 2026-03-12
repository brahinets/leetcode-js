import { maxStability } from '../script'

describe('3902. Maximize Spanning Tree Stability with Upgrades', (): void => {

    it('respects must-edge that caps stability', (): void => {
        expect(maxStability(3, [[0, 1, 2, 1], [1, 2, 3, 0]], 1))
            .toBe(2)
    })

    it('upgrades two optional edges to maximize minimum strength', (): void => {
        expect(maxStability(3, [[0, 1, 4, 0], [1, 2, 3, 0], [0, 2, 1, 0]], 2))
            .toBe(6)
    })

    it('returns -1 when must-edges form a cycle', (): void => {
        expect(maxStability(3, [[0, 1, 1, 1], [1, 2, 1, 1], [2, 0, 1, 1]], 0))
            .toBe(-1)
    })

    it('returns -1 when graph cannot be connected', (): void => {
        expect(maxStability(4, [[0, 1, 5, 0]], 2))
            .toBe(-1)
    })

    it('handles single must-edge connecting two nodes', (): void => {
        expect(maxStability(2, [[0, 1, 5, 1]], 0))
            .toBe(5)
    })

    it('doubles a single optional edge when k=1', (): void => {
        expect(maxStability(2, [[0, 1, 3, 0]], 1))
            .toBe(6)
    })

    it('uses no upgrade when optional edge already meets target', (): void => {
        expect(maxStability(2, [[0, 1, 10, 0]], 0))
            .toBe(10)
    })

    it('prefers no-upgrade edges over upgrade edges to conserve k', (): void => {
        // n=3, edges: 0-1 strength 5 (opt), 1-2 strength 2 (opt), 0-2 strength 6 (opt), k=1
        // For mid=5: use 0-1 free, use 0-2 free → connected, upgrades=0 ≤ 1. Stable=5
        // For mid=6: use 0-2 free. Need 0-1 or 1-2: 0-1 (5*2=10≥6) upgrade, 1-2 (2*2=4<6) unusable
        //   union(0,2) free; union(0,1) upgrade → all connected, upgrades=1 ≤ 1. Stable=6
        // For mid=7: 0-2 free (6<7? no, 6<7, 6*2=12≥7 → upgrade), 0-1 (5*2=10≥7 → upgrade)
        //   need 2 upgrades but k=1 → fail. Answer=6
        expect(maxStability(3, [[0, 1, 5, 0], [1, 2, 2, 0], [0, 2, 6, 0]], 1))
            .toBe(6)
    })

    it('handles must-edge alongside optional edges needing upgrades', (): void => {
        // n=3, must edge 0-1 strength 4, optional 1-2 strength 2, k=1
        // For mid=4: must 0-1 ok. optional 1-2 (2<4, 4≥4) → upgrade → connected, upgrades=1≤1 → ok
        // For mid=5: must 0-1 strength 4 < 5 → fail. Answer=4
        expect(maxStability(3, [[0, 1, 4, 1], [1, 2, 2, 0]], 1))
            .toBe(4)
    })
})
