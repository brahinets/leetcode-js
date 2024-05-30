export {countTriplets}

function countTriplets(arr: number[]): number {
    let count: number = 0

    for (let i = 0; i < arr.length; i++) {
        let xorStart: number = 0

        for (let j = i + 1; j < arr.length; j++) {
            xorStart ^= arr[j - 1]

            let xorEnd: number = 0
            for (let k = j; k < arr.length; k++) {
                xorEnd ^= arr[k]

                if (xorStart === xorEnd)
                    count++
            }
        }
    }

    return count
}
