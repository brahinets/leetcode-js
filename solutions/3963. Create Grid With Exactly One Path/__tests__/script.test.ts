import { createGrid } from '../script'

function countPaths(grid: string[]): number {
    const rows: number = grid.length
    const columns: number = grid[0].length
    const paths: number[][] = Array.from(
        { length: rows },
        (): number[] => new Array<number>(columns).fill(0)
    )

    for (let row: number = 0; row < rows; row++) {
        for (let column: number = 0; column < columns; column++) {
            if (grid[row][column] === '#') {
                continue
            }

            if (row === 0 && column === 0) {
                paths[row][column] = 1
                continue
            }

            const fromAbove: number = row > 0 ? paths[row - 1][column] : 0
            const fromLeft: number = column > 0 ? paths[row][column - 1] : 0
            paths[row][column] = fromAbove + fromLeft
        }
    }

    return paths[rows - 1][columns - 1]
}

describe('3963. Create Grid With Exactly One Path', (): void => {

    it('rectangular grid with more columns than rows', (): void => {
        // Arrange
        const m: number = 2
        const n: number = 3

        // Act
        const result: string[] = createGrid(m, n)

        // Assert
        expect(countPaths(result))
            .toBe(1)
    })

    it('square grid', (): void => {
        // Arrange
        const m: number = 3
        const n: number = 3

        // Act
        const result: string[] = createGrid(m, n)

        // Assert
        expect(countPaths(result))
            .toBe(1)
    })

    it('single row', (): void => {
        // Arrange
        const m: number = 1
        const n: number = 4

        // Act
        const result: string[] = createGrid(m, n)

        // Assert
        expect(result)
            .toEqual(['....'])
    })

    it('single column', (): void => {
        // Arrange
        const m: number = 4
        const n: number = 1

        // Act
        const result: string[] = createGrid(m, n)

        // Assert
        expect(result)
            .toEqual(['.', '.', '.', '.'])
    })

    it('single cell', (): void => {
        // Arrange
        const m: number = 1
        const n: number = 1

        // Act
        const result: string[] = createGrid(m, n)

        // Assert
        expect(result)
            .toEqual(['.'])
    })

    it('more rows than columns', (): void => {
        // Arrange
        const m: number = 7
        const n: number = 2

        // Act
        const result: string[] = createGrid(m, n)

        // Assert
        expect(countPaths(result))
            .toBe(1)
    })

    it('maximum size grid', (): void => {
        // Arrange
        const m: number = 25
        const n: number = 25

        // Act
        const result: string[] = createGrid(m, n)

        // Assert
        expect(countPaths(result))
            .toBe(1)
    })
})
