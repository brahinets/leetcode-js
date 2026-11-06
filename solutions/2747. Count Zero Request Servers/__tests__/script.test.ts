import { countServers } from '../script'

describe('2747. Count Zero Request Servers', (): void => {
    it('several servers stay idle inside the intervals', (): void => {
        const result: number[] = countServers(
            3,
            [[1, 3], [2, 6], [1, 5]],
            5,
            [10, 11]
        )

        expect(result)
            .toEqual([1, 2])
    })

    it('every server receives a request in the first interval', (): void => {
        const result: number[] = countServers(
            3,
            [[2, 4], [2, 1], [1, 2], [3, 1]],
            2,
            [3, 4]
        )

        expect(result)
            .toEqual([0, 1])
    })

    it('no server receives any request at all', (): void => {
        const result: number[] = countServers(3, [], 4, [10, 20])

        expect(result)
            .toEqual([3, 3])
    })

    it('single server goes idle after its only request expires', (): void => {
        const result: number[] = countServers(
            1,
            [[1, 5]],
            3,
            [5, 7, 9]
        )

        expect(result)
            .toEqual([0, 0, 1])
    })

    it('requests at both window boundaries count as received', (): void => {
        const result: number[] = countServers(
            2,
            [[1, 1], [2, 3]],
            2,
            [3]
        )

        expect(result)
            .toEqual([0])
    })

    it('repeated requests from one server leave others idle', (): void => {
        const result: number[] = countServers(
            3,
            [[1, 2], [1, 4], [1, 6]],
            5,
            [7]
        )

        expect(result)
            .toEqual([2])
    })

    it('interval longer than every log timestamp keeps all servers active', (): void => {
        const result: number[] = countServers(
            2,
            [[1, 1], [2, 2]],
            100,
            [50]
        )

        expect(result)
            .toEqual([0])
    })

    it('unsorted queries and logs are handled correctly', (): void => {
        const result: number[] = countServers(
            2,
            [[2, 9], [1, 3]],
            4,
            [12, 5]
        )

        expect(result)
            .toEqual([1, 1])
    })
})
