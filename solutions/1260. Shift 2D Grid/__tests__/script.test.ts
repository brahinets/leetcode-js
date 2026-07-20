import { shiftGrid } from '../script'

describe('1260. Shift 2D Grid', (): void => {
    it('shifts 3x3 grid by 1', (): void => {
        // Arrange
        const grid: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        const k: number = 1
        const expected: number[][] = [[9, 1, 2], [3, 4, 5], [6, 7, 8]]

        // Act
        const result: number[][] = shiftGrid(grid, k)

        // Assert
        expect(result).toEqual(expected)
    })

    it('shifts 4x3 grid by 4', (): void => {
        // Arrange
        const grid: number[][] = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]]
        const k: number = 4
        const expected: number[][] = [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]]

        // Act
        const result: number[][] = shiftGrid(grid, k)

        // Assert
        expect(result).toEqual(expected)
    })

    it('returns original grid when k equals total elements', (): void => {
        // Arrange
        const grid: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        const k: number = 9
        const expected: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

        // Act
        const result: number[][] = shiftGrid(grid, k)

        // Assert
        expect(result).toEqual(expected)
    })

    it('shifts 2x3 grid by 4', (): void => {
        // Arrange
        const grid: number[][] = [[1, 2, 3], [4, 5, 6]]
        const k: number = 4
        const expected: number[][] = [[3, 4, 5], [6, 1, 2]]

        // Act
        const result: number[][] = shiftGrid(grid, k)

        // Assert
        expect(result).toEqual(expected)
    })

    it('handles k equals 0', (): void => {
        // Arrange
        const grid: number[][] = [[1, 2], [3, 4]]
        const k: number = 0
        const expected: number[][] = [[1, 2], [3, 4]]

        // Act
        const result: number[][] = shiftGrid(grid, k)

        // Assert
        expect(result).toEqual(expected)
    })

    it('handles single element grid', (): void => {
        // Arrange
        const grid: number[][] = [[5]]
        const k: number = 7
        const expected: number[][] = [[5]]

        // Act
        const result: number[][] = shiftGrid(grid, k)

        // Assert
        expect(result).toEqual(expected)
    })

    it('handles negative numbers in grid', (): void => {
        // Arrange
        const grid: number[][] = [[-1, -2], [-3, -4]]
        const k: number = 1
        const expected: number[][] = [[-4, -1], [-2, -3]]

        // Act
        const result: number[][] = shiftGrid(grid, k)

        // Assert
        expect(result).toEqual(expected)
    })

    it('handles single row grid', (): void => {
        // Arrange
        const grid: number[][] = [[1, 2, 3, 4, 5]]
        const k: number = 2
        const expected: number[][] = [[4, 5, 1, 2, 3]]

        // Act
        const result: number[][] = shiftGrid(grid, k)

        // Assert
        expect(result).toEqual(expected)
    })

    it('handles single column grid', (): void => {
        // Arrange
        const grid: number[][] = [[1], [2], [3], [4]]
        const k: number = 3
        const expected: number[][] = [[2], [3], [4], [1]]

        // Act
        const result: number[][] = shiftGrid(grid, k)

        // Assert
        expect(result).toEqual(expected)
    })
})
