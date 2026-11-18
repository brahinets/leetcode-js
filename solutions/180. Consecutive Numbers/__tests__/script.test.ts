import { consecutiveNumbers, Log } from '../script'

describe('180. Consecutive Numbers', (): void => {
    it('finds a number appearing three times in a row among shorter runs', (): void => {
        const logs: Log[] = [
            { id: 1, num: '1' },
            { id: 2, num: '1' },
            { id: 3, num: '1' },
            { id: 4, num: '2' },
            { id: 5, num: '1' },
            { id: 6, num: '2' },
            { id: 7, num: '2' }
        ]
        expect(consecutiveNumbers(logs)).toEqual(['1'])
    })

    it('reports a number once when it has several qualifying runs', (): void => {
        const logs: Log[] = [
            { id: 1, num: '1' },
            { id: 2, num: '1' },
            { id: 3, num: '1' },
            { id: 4, num: '2' },
            { id: 5, num: '1' },
            { id: 6, num: '1' },
            { id: 7, num: '1' }
        ]
        expect(consecutiveNumbers(logs)).toEqual(['1'])
    })

    it('finds every number that has its own run of three', (): void => {
        const logs: Log[] = [
            { id: 1, num: '1' },
            { id: 2, num: '1' },
            { id: 3, num: '1' },
            { id: 4, num: '2' },
            { id: 5, num: '2' },
            { id: 6, num: '2' },
            { id: 7, num: '3' }
        ]
        expect(consecutiveNumbers(logs)).toEqual(['1', '2'])
    })

    it('finds nothing when no number repeats three times in a row', (): void => {
        const logs: Log[] = [
            { id: 1, num: '1' },
            { id: 2, num: '2' },
            { id: 3, num: '1' },
            { id: 4, num: '2' }
        ]
        expect(consecutiveNumbers(logs)).toEqual([])
    })

    it('finds nothing when the longest run has only two repeats', (): void => {
        const logs: Log[] = [
            { id: 1, num: '5' },
            { id: 2, num: '5' }
        ]
        expect(consecutiveNumbers(logs)).toEqual([])
    })

    it('finds nothing in an empty table', (): void => {
        const logs: Log[] = []
        expect(consecutiveNumbers(logs)).toEqual([])
    })
})
