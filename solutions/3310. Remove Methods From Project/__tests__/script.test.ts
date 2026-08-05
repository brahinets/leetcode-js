import { remainingMethods } from '../script'

describe('3310. Remove Methods From Project', (): void => {
    it('suspicious group invoked from outside blocks removal', (): void => {
        const n: number = 4
        const k: number = 1
        const invocations: number[][] = [[1, 2], [0, 1], [3, 2]]

        const result: number[] = remainingMethods(n, k, invocations)

        expect(result.sort())
            .toEqual([0, 1, 2, 3])
    })

    it('isolated suspicious group is removed', (): void => {
        const n: number = 5
        const k: number = 0
        const invocations: number[][] = [[1, 2], [0, 2], [0, 1], [3, 4]]

        const result: number[] = remainingMethods(n, k, invocations)

        expect(result.sort())
            .toEqual([3, 4])
    })

    it('entire project is suspicious and removed', (): void => {
        const n: number = 3
        const k: number = 2
        const invocations: number[][] = [[1, 2], [0, 1], [2, 0]]

        const result: number[] = remainingMethods(n, k, invocations)

        expect(result.sort())
            .toEqual([])
    })

    it('single method with no invocations removes only itself', (): void => {
        const n: number = 1
        const k: number = 0
        const invocations: number[][] = []

        const result: number[] = remainingMethods(n, k, invocations)

        expect(result.sort())
            .toEqual([])
    })

    it('bug method with no outgoing invocations is removed alone', (): void => {
        const n: number = 3
        const k: number = 1
        const invocations: number[][] = [[0, 2]]

        const result: number[] = remainingMethods(n, k, invocations)

        expect(result.sort())
            .toEqual([0, 2])
    })

    it('unrelated methods stay untouched when suspicious group is removable', (): void => {
        const n: number = 6
        const k: number = 4
        const invocations: number[][] = [[4, 5], [0, 1], [1, 2]]

        const result: number[] = remainingMethods(n, k, invocations)

        expect(result.sort())
            .toEqual([0, 1, 2, 3])
    })
})
