export {minDeletionSize}

function minDeletionSize(strs: string[]): number {
    let deleteCount: number = 0

    for (let col: number = 0; col < strs[0].length; col++) {
        for (let row: number = 1; row < strs.length; row++) {
            if (strs[row][col] < strs[row - 1][col]) {
                deleteCount++

                break
            }
        }
    }

    return deleteCount
}
