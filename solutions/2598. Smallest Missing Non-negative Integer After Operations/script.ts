export {findSmallestInteger}

function findSmallestInteger(nums: number[], value: number): number {
    const modCount: Map<number, number> = new Map<number, number>()
    for (const num of nums) {
        const mod: number = ((num % value) + value) % value
        modCount.set(mod, (modCount.get(mod) ?? 0) + 1)
    }

    let missing: number = 0

    while (true) {
        const mod: number = missing % value
        if ((modCount.get(mod) ?? 0) > 0) {
            modCount.set(mod, (modCount.get(mod) ?? 0) - 1)
            missing++
        } else {
            return missing
        }
    }
}
