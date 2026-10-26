import { countIslands } from '../script'

describe('3619. Count Islands With Total Value Divisible by K', (): void => {

    it('two of several islands have divisible totals', (): void => {
        // Arrange
        const grid: number[][] = [
            [0, 2, 1, 0, 0],
            [0, 5, 0, 0, 5],
            [0, 0, 1, 0, 0],
            [0, 1, 4, 7, 0],
            [0, 2, 0, 0, 8]
        ]
        const k: number = 5

        // Act
        const result: number = countIslands(grid, k)

        // Assert
        expect(result)
            .toBe(2)
    })

    it('isolated cells each form a divisible island', (): void => {
        // Arrange
        const grid: number[][] = [
            [3, 0, 3, 0],
            [0, 3, 0, 3],
            [3, 0, 3, 0]
        ]
        const k: number = 3

        // Act
        const result: number = countIslands(grid, k)

        // Assert
        expect(result)
            .toBe(6)
    })

    it('grid without land has no islands', (): void => {
        // Arrange
        const grid: number[][] = [
            [0, 0],
            [0, 0]
        ]
        const k: number = 1

        // Act
        const result: number = countIslands(grid, k)

        // Assert
        expect(result)
            .toBe(0)
    })

    it('single land cell not divisible by k', (): void => {
        // Arrange
        const grid: number[][] = [[7]]
        const k: number = 2

        // Act
        const result: number = countIslands(grid, k)

        // Assert
        expect(result)
            .toBe(0)
    })

    it('every island counts when k is one', (): void => {
        // Arrange
        const grid: number[][] = [
            [1, 0, 2],
            [0, 0, 0],
            [4, 0, 9]
        ]
        const k: number = 1

        // Act
        const result: number = countIslands(grid, k)

        // Assert
        expect(result)
            .toBe(4)
    })

    it('diagonal neighbours form separate islands', (): void => {
        // Arrange
        const grid: number[][] = [
            [2, 0],
            [0, 2]
        ]
        const k: number = 4

        // Act
        const result: number = countIslands(grid, k)

        // Assert
        expect(result)
            .toBe(0)
    })

    it('winding island is summed as a whole', (): void => {
        // Arrange
        const grid: number[][] = [
            [1, 1, 1],
            [0, 0, 1],
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 1]
        ]
        const k: number = 11

        // Act
        const result: number = countIslands(grid, k)

        // Assert
        expect(result)
            .toBe(1)
    })

    it('large values in a single row island', (): void => {
        // Arrange
        const grid: number[][] = [[1000000, 1000000, 0, 999999]]
        const k: number = 1000000

        // Act
        const result: number = countIslands(grid, k)

        // Assert
        expect(result)
            .toBe(1)
    })
})
