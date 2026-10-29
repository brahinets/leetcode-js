import { palindromePath } from '../script'

describe('3841. Palindromic Path Queries in a Tree', (): void => {

    it('path tree where an update breaks the palindrome rearrangement', (): void => {
        // Arrange
        const n: number = 3
        const edges: number[][] = [[0, 1], [1, 2]]
        const s: string = 'aac'
        const queries: string[] = ['query 0 2', 'update 1 b', 'query 0 2']

        // Act
        const result: boolean[] = palindromePath(n, edges, s, queries)

        // Assert
        expect(result)
            .toEqual([true, false])
    })

    it('star tree where paths cross through the root', (): void => {
        // Arrange
        const n: number = 4
        const edges: number[][] = [[0, 1], [0, 2], [0, 3]]
        const s: string = 'abca'
        const queries: string[] = [
            'query 1 2',
            'update 0 b',
            'query 2 3',
            'update 3 a',
            'query 1 3'
        ]

        // Act
        const result: boolean[] = palindromePath(n, edges, s, queries)

        // Assert
        expect(result)
            .toEqual([false, false, true])
    })

    it('single node path is always a palindrome', (): void => {
        // Arrange
        const n: number = 1
        const edges: number[][] = []
        const s: string = 'z'
        const queries: string[] = ['query 0 0']

        // Act
        const result: boolean[] = palindromePath(n, edges, s, queries)

        // Assert
        expect(result)
            .toEqual([true])
    })

    it('single node stays a palindrome after any update', (): void => {
        // Arrange
        const n: number = 1
        const edges: number[][] = []
        const s: string = 'a'
        const queries: string[] = ['update 0 q', 'query 0 0']

        // Act
        const result: boolean[] = palindromePath(n, edges, s, queries)

        // Assert
        expect(result)
            .toEqual([true])
    })

    it('long chain with an update in the middle of the heavy path', (): void => {
        // Arrange
        const n: number = 4
        const edges: number[][] = [[0, 1], [1, 2], [2, 3]]
        const s: string = 'aaaa'
        const queries: string[] = ['query 0 3', 'update 2 b', 'query 0 3']

        // Act
        const result: boolean[] = palindromePath(n, edges, s, queries)

        // Assert
        expect(result)
            .toEqual([true, false])
    })

    it('alternating characters form a palindrome on even length path', (): void => {
        // Arrange
        const n: number = 4
        const edges: number[][] = [[0, 1], [1, 2], [2, 3]]
        const s: string = 'abab'
        const queries: string[] = ['query 0 3', 'query 1 2']

        // Act
        const result: boolean[] = palindromePath(n, edges, s, queries)

        // Assert
        expect(result)
            .toEqual([true, false])
    })

    it('path spanning a heavy chain and a light branch', (): void => {
        // Arrange
        const n: number = 5
        const edges: number[][] = [[0, 1], [1, 2], [2, 3], [0, 4]]
        const s: string = 'aaaab'
        const queries: string[] = [
            'query 3 4',
            'update 1 b',
            'query 3 0',
            'query 3 4'
        ]

        // Act
        const result: boolean[] = palindromePath(n, edges, s, queries)

        // Assert
        expect(result)
            .toEqual([true, false, true])
    })

    it('query with identical endpoints counts a single node', (): void => {
        // Arrange
        const n: number = 5
        const edges: number[][] = [[0, 1], [1, 2], [2, 3], [3, 4]]
        const s: string = 'abcde'
        const queries: string[] = ['query 2 2']

        // Act
        const result: boolean[] = palindromePath(n, edges, s, queries)

        // Assert
        expect(result)
            .toEqual([true])
    })

    it('repeated updates keep affecting subsequent queries', (): void => {
        // Arrange
        const n: number = 2
        const edges: number[][] = [[0, 1]]
        const s: string = 'ab'
        const queries: string[] = [
            'query 0 1',
            'update 1 a',
            'query 0 1',
            'update 0 b',
            'query 0 1'
        ]

        // Act
        const result: boolean[] = palindromePath(n, edges, s, queries)

        // Assert
        expect(result)
            .toEqual([false, true, false])
    })
})
