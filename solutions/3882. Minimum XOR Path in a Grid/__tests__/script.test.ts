import { minCost } from '../script'

describe('3882. Minimum XOR Path in a Grid', (): void => {

    it('two by two grid picks the cheaper of two paths', (): void => {
        // Arrange
        const grid: number[][] = [[1, 2], [3, 4]]

        // Act
        const result: number = minCost(grid)

        // Assert
        expect(result)
            .toBe(6)
    })

    it('two by two grid where the upper path is cheaper', (): void => {
        // Arrange
        const grid: number[][] = [[6, 7], [5, 8]]

        // Act
        const result: number = minCost(grid)

        // Assert
        expect(result)
            .toBe(9)
    })

    it('single row whose values xor to zero', (): void => {
        // Arrange
        const grid: number[][] = [[2, 7, 5]]

        // Act
        const result: number = minCost(grid)

        // Assert
        expect(result)
            .toBe(0)
    })

    it('single cell grid', (): void => {
        // Arrange
        const grid: number[][] = [[5]]

        // Act
        const result: number = minCost(grid)

        // Assert
        expect(result)
            .toBe(5)
    })

    it('single column grid', (): void => {
        // Arrange
        const grid: number[][] = [[1], [2], [4]]

        // Act
        const result: number = minCost(grid)

        // Assert
        expect(result)
            .toBe(7)
    })

    it('grid with zero values allows zero xor path', (): void => {
        // Arrange
        const grid: number[][] = [[0, 1023], [0, 0]]

        // Act
        const result: number = minCost(grid)

        // Assert
        expect(result)
            .toBe(0)
    })

    it('large grid with even count of equal values', (): void => {
        // Arrange
        const rows: number = 25
        const columns: number = 40
        const grid: number[][] = Array.from(
            { length: rows },
            (): number[] => new Array<number>(columns).fill(1)
        )

        // Act
        const result: number = minCost(grid)

        // Assert
        expect(result)
            .toBe(0)
    })
})
