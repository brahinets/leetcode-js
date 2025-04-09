export {minOperations}

function minOperations(nums: number[], k: number): number {
    const bigger: Set<number> = new Set<number>()

    for (const x of nums) {
        if (x < k) {
            return -1
        } else if (x > k) {
            bigger.add(x)
        }
    }

    return bigger.size
}
