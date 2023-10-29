export {zeroFilledSubarray}

function countSubArrays(zeroSubArrayLength: number): number {
    let count: number = 0

    for (let step:number = 1; step <= zeroSubArrayLength; step++) {
        count += zeroSubArrayLength - (step - 1)
    }

    return count
}

function zeroFilledSubarray(nums: number[]): number {
    let zeroCounter: number = 0
    let i: number = 0

    while (i < nums.length) {
        let zeroSubArrayLength: number = 0
        while (nums[i] === 0 && i < nums.length) {
            zeroSubArrayLength++
            i++
        }

        if (zeroSubArrayLength > 0) {
            zeroCounter += countSubArrays(zeroSubArrayLength)
        }

        i++
    }

    return zeroCounter
}
