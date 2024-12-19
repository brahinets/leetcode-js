export {maxChunksToSorted}

function maxChunksToSorted(arr: number[]): number {
    let max: number = 0
    let count: number = 0

    for (let i: number = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i])

        if (max === i) {
            count++
        }
    }

    return count
}
