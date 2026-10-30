import { shortestPath } from '../script'

describe('3970. Shortest Path With At Most K Consecutive Identical Characters', (): void => {

    it('limit of one forces a detour through a label change', (): void => {
        // Arrange
        const nodeCount: number = 3
        const edges: number[][] = [[0, 1, 1], [1, 2, 1], [0, 2, 3]]
        const labels: string = 'aab'
        const maximumConsecutive: number = 1

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(3)
    })

    it('limit of two allows the cheaper two edge path', (): void => {
        // Arrange
        const nodeCount: number = 3
        const edges: number[][] = [[0, 1, 1], [1, 2, 1], [0, 2, 3]]
        const labels: string = 'aab'
        const maximumConsecutive: number = 2

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(2)
    })

    it('every path exceeds the consecutive limit', (): void => {
        // Arrange
        const nodeCount: number = 3
        const edges: number[][] = [[0, 1, 1], [1, 2, 1]]
        const labels: string = 'aaa'
        const maximumConsecutive: number = 2

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(-1)
    })

    it('single node is already the target', (): void => {
        // Arrange
        const nodeCount: number = 1
        const edges: number[][] = []
        const labels: string = 'a'
        const maximumConsecutive: number = 1

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(0)
    })

    it('no edges between distinct nodes', (): void => {
        // Arrange
        const nodeCount: number = 2
        const edges: number[][] = []
        const labels: string = 'ab'
        const maximumConsecutive: number = 1

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(-1)
    })

    it('identical labels on direct edge exceed limit of one', (): void => {
        // Arrange
        const nodeCount: number = 2
        const edges: number[][] = [[0, 1, 5]]
        const labels: string = 'aa'
        const maximumConsecutive: number = 1

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(-1)
    })

    it('identical labels on direct edge within limit of two', (): void => {
        // Arrange
        const nodeCount: number = 2
        const edges: number[][] = [[0, 1, 5]]
        const labels: string = 'aa'
        const maximumConsecutive: number = 2

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(5)
    })

    it('run length equal to the limit is allowed', (): void => {
        // Arrange
        const nodeCount: number = 4
        const edges: number[][] = [[0, 1, 1], [1, 2, 1], [2, 3, 1]]
        const labels: string = 'aaaa'
        const maximumConsecutive: number = 4

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(3)
    })

    it('run length one above the limit is rejected', (): void => {
        // Arrange
        const nodeCount: number = 4
        const edges: number[][] = [[0, 1, 1], [1, 2, 1], [2, 3, 1]]
        const labels: string = 'aaaa'
        const maximumConsecutive: number = 3

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(-1)
    })

    it('direct edge used when cheaper chain exceeds the limit', (): void => {
        // Arrange
        const nodeCount: number = 4
        const edges: number[][] = [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 10]]
        const labels: string = 'aaaa'
        const maximumConsecutive: number = 3

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(10)
    })

    it('detour chosen when cheapest route breaks the limit', (): void => {
        // Arrange
        const nodeCount: number = 4
        const edges: number[][] = [[0, 1, 1], [1, 3, 1], [0, 2, 2], [2, 3, 2]]
        const labels: string = 'aaba'
        const maximumConsecutive: number = 2

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(4)
    })

    it('label change resets the run so a long run can follow', (): void => {
        // Arrange
        const nodeCount: number = 5
        const edges: number[][] = [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1]]
        const labels: string = 'aabaa'
        const maximumConsecutive: number = 2

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(4)
    })

    it('parallel edges choose the cheaper weight', (): void => {
        // Arrange
        const nodeCount: number = 2
        const edges: number[][] = [[0, 1, 7], [0, 1, 3]]
        const labels: string = 'ab'
        const maximumConsecutive: number = 1

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(3)
    })

    it('long alternating chain with maximum node count', (): void => {
        // Arrange
        const nodeCount: number = 50000
        const edges: number[][] = []
        for (let node: number = 0; node < nodeCount - 1; node++) {
            edges.push([node, node + 1, 1])
        }

        const labels: string = 'ab'.repeat(25000)
        const maximumConsecutive: number = 1

        // Act
        const result: number = shortestPath(
            nodeCount,
            edges,
            labels,
            maximumConsecutive
        )

        // Assert
        expect(result)
            .toBe(49999)
    })
})
