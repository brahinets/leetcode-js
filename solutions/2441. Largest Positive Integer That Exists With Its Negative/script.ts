export {findMaxK}

function findMaxK(nums: number[]): number {
    let k: number = -1
    const count: Set<number> = new Set<number>()

    for (const n of nums) {
        if (n > 0) {
            if (count.has(-n)) {
                k = Math.max(n, k)
            }
        } else {
            if (count.has(Math.abs(n))) {
                k = Math.max(Math.abs(n), k)
            }
        }

        count.add(n)
    }

    return k
}
