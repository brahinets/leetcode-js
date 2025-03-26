export {minOperations}

function minOperations(grid: number[][], x: number): number {
    const arr: number[] = []
    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            arr.push(grid[i][j])
        }
    }

    arr.sort((a: number, b: number): number => a - b)

    const median: number = arr[Math.floor(arr.length / 2)]
    let operations: number = 0

    for (const num of arr) {
        const diff: number = Math.abs(num - median)
        if (diff % x !== 0) {
            return -1
        }

        operations += diff / x
    }

    return operations
}
