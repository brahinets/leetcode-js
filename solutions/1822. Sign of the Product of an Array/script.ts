export {arraySign}

function arraySign(nums: number[]): number {
    let positive: boolean = true

    for (const n of nums) {
        if (n === 0) {
            return 0
        }

        if (n < 0) {
            positive = !positive
        }
    }

    return positive ? 1 : -1
}
