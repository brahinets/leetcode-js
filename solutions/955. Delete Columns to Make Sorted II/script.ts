import {arrayOf} from "../../common/array-factories"

export {minDeletionSize}

function minDeletionSize(strs: string[]): number {
    let deletions: number = 0
    const sorted: boolean[] = arrayOf(false, strs.length - 1)

    for (let col: number = 0; col < strs[0].length; col++) {
        let needToDelete: boolean = false

        for (let row: number = 0; row < strs.length - 1; row++) {
            if (!sorted[row] && strs[row][col] > strs[row + 1][col]) {
                needToDelete = true
                break
            }
        }

        if (needToDelete) {
            deletions++
        } else {
            for (let row: number = 0; row < strs.length - 1; row++) {
                if (strs[row][col] < strs[row + 1][col]) {
                    sorted[row] = true
                }
            }
        }
    }

    return deletions
}
