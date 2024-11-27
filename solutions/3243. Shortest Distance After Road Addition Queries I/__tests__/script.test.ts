import {shortestDistanceAfterQueries} from '../script'

describe('3243. Shortest Distance After Road Addition Queries I', (): void => {
    it('Has optimisation', (): void => {
        expect(shortestDistanceAfterQueries(5, [[2, 4], [0, 2], [0, 4]]))
            .toEqual([3, 2, 1])
    })

    it('No optimisation', (): void => {
        expect(shortestDistanceAfterQueries(4, [[0, 3], [0, 2]]))
            .toEqual([1, 1])
    })
})
