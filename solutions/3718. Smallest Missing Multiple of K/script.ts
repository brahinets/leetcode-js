export {smallestMissingMultipleOfK}

function smallestMissingMultipleOfK(nums: number[], k: number): number {
    const numberSet: Set<number> = new Set<number>(nums)

    let multiple: number = k

    while (numberSet.has(multiple)) {
        multiple += k
    }

    return multiple
}
