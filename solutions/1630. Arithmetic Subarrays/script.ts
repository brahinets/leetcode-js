export {checkArithmeticSubarrays}

function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    const result: boolean[] = []

    for (let i: number = 0; i < l.length; i++) {
        result.push(canMakeArithmeticProgression(nums.slice(l[i], r[i] + 1)))
    }

    return result
}

function canMakeArithmeticProgression(arr: number[]): boolean {
    if (arr.length <= 2) {
        return true
    }

    arr = arr.toSorted((a: number, b: number): number => a - b)

    const step: number = arr[1] - arr[0]

    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== step) {
            return false
        }
    }

    return true
}
