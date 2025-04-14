export {countGoodTriplets}

function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let count: number = 0

    for (let i: number = 0; i < arr.length - 2; i++) {
        for (let j: number = i + 1; j < arr.length - 1; j++) {
            for (let k: number = j + 1; k < arr.length; k++) {
                if (goodTriplet(arr, i, j, a, k, b, c)) {
                    count++
                }
            }
        }
    }

    return count
}

function goodTriplet(arr: number[], i: number, j: number, a: number, k: number, b: number, c: number): boolean {
    return Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c
}
