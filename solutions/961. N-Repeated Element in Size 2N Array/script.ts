export {repeatedNTimes}

function repeatedNTimes(nums: number[]): number {
    const seen: Set<number> = new Set<number>()

    for (const num of nums) {
        if (seen.has(num)) {
            return num
        }

        seen.add(num)
    }

    throw Error('Illegal state. No repeated element found')
}
