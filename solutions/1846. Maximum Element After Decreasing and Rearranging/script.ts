export {maximumElementAfterDecrementingAndRearranging}

function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr = arr.toSorted((a: number, b: number) => a - b)

    let result: number = 1
    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] > result) {
            result++
        }
    }

    return result
}
