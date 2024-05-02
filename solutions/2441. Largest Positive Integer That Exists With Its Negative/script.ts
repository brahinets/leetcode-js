export {findMaxK}

function findMaxK(nums: number[]): number {
    let k: number = -1
    const count: Set<number> = new Set<number>()

    for (const num of nums) {
        const abs: number = Math.abs(num);

        if (abs > k && count.has(-num)) {
            k = abs
        }

        count.add(num)
    }

    return k
}
