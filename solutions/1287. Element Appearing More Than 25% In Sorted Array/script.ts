export {findSpecialInteger}

function findSpecialInteger(arr: number[]): number {
    const threshold: number = arr.length / 4

    let count: number = 0
    let value: number
    for (let i: number = 0; i < arr.length; i++) {
        value = arr[i]

        if (i === 0) {
            count = 1
        } else {
            if (arr[i] === arr[i - 1]) {
                count++
            } else {
                count = 1
            }
        }

        if (count > threshold) {
            return value
        }
    }

    throw new Error("No solution found")
}
