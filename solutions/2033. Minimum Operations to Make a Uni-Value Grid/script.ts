export {minOperations}

function minOperations(grid: number[][], x: number): number {
    const values: number[] = []
    for (let rowIndex: number = 0; rowIndex < grid.length; rowIndex++) {
        for (let columnIndex: number = 0; columnIndex < grid[0].length; columnIndex++) {
            values.push(grid[rowIndex][columnIndex])
        }
    }

    values.sort((first: number, second: number): number => first - second)

    const median: number = values[Math.floor(values.length / 2)]
    let operations: number = 0

    for (const value of values) {
        const difference: number = Math.abs(value - median)
        if (difference % x !== 0) {
            return -1
        }

        operations += difference / x
    }

    return operations
}
