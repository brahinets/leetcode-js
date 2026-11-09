import { busiestServers } from '../script'

describe('1606. Find Servers That Handled Most Number of Requests', (): void => {
    it('handles wrap-around to a server freed in the same request cycle', (): void => {
        const result: number[] = busiestServers(3, [1, 2, 3, 4, 5], [5, 2, 3, 3, 3])

        expect(result).toEqual([1])
    })

    it('assigns the request arriving exactly when a server frees up', (): void => {
        const result: number[] = busiestServers(3, [1, 2, 3, 4], [1, 2, 1, 2])

        expect(result).toEqual([0])
    })

    it('treats every server as busiest when each handles a single request', (): void => {
        const result: number[] = busiestServers(3, [1, 2, 3], [10, 12, 11])

        expect(result).toEqual([0, 1, 2])
    })

    it('routes every request to the only server', (): void => {
        const result: number[] = busiestServers(1, [1, 2, 3, 4], [1, 1, 1, 1])

        expect(result).toEqual([0])
    })

    it('leaves later servers idle when there are fewer requests than servers', (): void => {
        const result: number[] = busiestServers(4, [1, 2], [3, 3])

        expect(result).toEqual([0, 1])
    })

    it('drops requests that arrive while every server is busy', (): void => {
        const result: number[] = busiestServers(2, [1, 2, 3], [10, 10, 10])

        expect(result).toEqual([0, 1])
    })

    it('places freed servers at their correct position in the request cycle', (): void => {
        const result: number[] = busiestServers(3, [1, 3, 5, 7, 9], [4, 4, 4, 4, 1])

        expect(result).toEqual([0, 1])
    })

    it('wraps past the busy preferred server to the next available one', (): void => {
        const result: number[] = busiestServers(3, [1, 2, 3, 4], [10, 1, 10, 1])

        expect(result).toEqual([1])
    })
})
