import {findSafeWalk} from '../script'

describe('3286. Find a Safe Walk Through a Grid', (): void => {
    it('safe path exists with minimum health', (): void => {
        const grid: number[][] = [
            [0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0]
        ]
        const health: number = 1

        const result: boolean = findSafeWalk(grid, health)

        expect(result)
            .toBe(true)
    })

    it('insufficient health for the safest available path', (): void => {
        const grid: number[][] = [
            [0, 1, 1, 0, 0, 0],
            [1, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 0]
        ]
        const health: number = 3

        const result: boolean = findSafeWalk(grid, health)

        expect(result)
            .toBe(false)
    })

    it('only one safe path through the center of a hazardous grid', (): void => {
        const grid: number[][] = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ]
        const health: number = 5

        const result: boolean = findSafeWalk(grid, health)

        expect(result)
            .toBe(true)
    })

    it('unsafe starting cell reduces health before any move', (): void => {
        const grid: number[][] = [
            [1, 0],
            [0, 0]
        ]
        const health: number = 1

        const result: boolean = findSafeWalk(grid, health)

        expect(result)
            .toBe(false)
    })

    it('single row grid with no unsafe cells', (): void => {
        const grid: number[][] = [[0, 0, 0, 0]]
        const health: number = 1

        const result: boolean = findSafeWalk(grid, health)

        expect(result)
            .toBe(true)
    })

    it('health reaches exactly zero at the destination', (): void => {
        const grid: number[][] = [
            [0, 1],
            [1, 1]
        ]
        const health: number = 2

        const result: boolean = findSafeWalk(grid, health)

        expect(result)
            .toBe(false)
    })
})
