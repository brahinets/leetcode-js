export {findDiagonalOrder}

function findDiagonalOrder(nums: number[][]): number[] {
    const diagonals: number[][] = []

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; j < nums[i].length; j++) {
            if (diagonals[i + j] === undefined) {
                diagonals[i + j] = []
            }

            if (nums[i][j] !== undefined) {
                diagonals[i + j].push(nums[i][j])
            }
        }
    }

    const result: number[] = []
    for (let i: number = 0; i < diagonals.length; i++) {
        result.push(...diagonals[i].reverse())
    }

    return result
}
