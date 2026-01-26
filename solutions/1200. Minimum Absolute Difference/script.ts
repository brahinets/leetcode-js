export {minimumAbsDifference}

function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a: number, b: number): number => a - b)

    let minDiff: number = Number.MAX_SAFE_INTEGER
    const result: number[][] = []

    for (let i: number = 1; i < arr.length; i++) {
        const diff: number = arr[i] - arr[i - 1]

        if (diff < minDiff) {
            minDiff = diff
            result.length = 0
            result.push([arr[i - 1], arr[i]])
        } else if (diff === minDiff) {
            result.push([arr[i - 1], arr[i]])
        }
    }

    return result
}
