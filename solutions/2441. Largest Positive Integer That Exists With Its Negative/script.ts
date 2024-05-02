export {findMaxK}

function findMaxK(nums: number[]): number {
    let k: number = -1
    const seen: Set<number> = new Set<number>()

    for (const num of nums) {
        const abs: number = Math.abs(num);

        if (abs > k && seen.has(-num)) {
            k = abs
        }

        seen.add(num)
    }

    return k
}
