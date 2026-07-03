import {findMaxPathScore} from '../script'

describe('3620. Network Recovery Pathways', (): void => {
    it('cheaper route exceeds budget while pricier route stays within it', (): void => {
        const edges: number[][] = [[0, 1, 5], [1, 3, 10], [0, 2, 3], [2, 3, 4]]
        const online: boolean[] = [true, true, true, true]
        const k: number = 10

        const result: number = findMaxPathScore(edges, online, k)

        expect(result)
            .toBe(3)
    })

    it('offline intermediate node removes one of two affordable routes', (): void => {
        const edges: number[][] = [[0, 1, 7], [1, 4, 5], [0, 2, 6], [2, 3, 6], [3, 4, 2], [2, 4, 6]]
        const online: boolean[] = [true, true, true, false, true]
        const k: number = 12

        const result: number = findMaxPathScore(edges, online, k)

        expect(result)
            .toBe(6)
    })

    it('no edges available between the source and destination', (): void => {
        const edges: number[][] = []
        const online: boolean[] = [true, true]
        const k: number = 5

        const result: number = findMaxPathScore(edges, online, k)

        expect(result)
            .toBe(-1)
    })

    it('only route costs more than the recovery budget allows', (): void => {
        const edges: number[][] = [[0, 1, 100]]
        const online: boolean[] = [true, true]
        const k: number = 5

        const result: number = findMaxPathScore(edges, online, k)

        expect(result)
            .toBe(-1)
    })

    it('single edge cost lands exactly on the budget boundary', (): void => {
        const edges: number[][] = [[0, 1, 5]]
        const online: boolean[] = [true, true]
        const k: number = 5

        const result: number = findMaxPathScore(edges, online, k)

        expect(result)
            .toBe(5)
    })

    it('every edge along the only route is free of charge', (): void => {
        const edges: number[][] = [[0, 1, 0], [1, 2, 0]]
        const online: boolean[] = [true, true, true]
        const k: number = 0

        const result: number = findMaxPathScore(edges, online, k)

        expect(result)
            .toBe(0)
    })

    it('offline node blocks every possible route to the destination', (): void => {
        const edges: number[][] = [[0, 1, 1], [1, 2, 1]]
        const online: boolean[] = [true, false, true]
        const k: number = 10

        const result: number = findMaxPathScore(edges, online, k)

        expect(result)
            .toBe(-1)
    })

    it('higher threshold prunes the cheap edge needed to stay within budget', (): void => {
        const edges: number[][] = [[0, 1, 1], [1, 2, 100], [0, 2, 50]]
        const online: boolean[] = [true, true, true]
        const k: number = 60

        const result: number = findMaxPathScore(edges, online, k)

        expect(result)
            .toBe(50)
    })
})
