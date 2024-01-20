export {sumSubarrayMins}

const mod: number = 1e9 + 7

function sumSubarrayMins(arr: number[]): number {
    let sum: number = 0

    for (let i: number = 0; i < arr.length; i++) {
        let min: number = arr[i]

        for (let j: number = i; j < arr.length; j++) {
            min = Math.min(min, arr[j])
            sum += min
            sum %= mod
        }
    }

    return sum
}
