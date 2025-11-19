export {findFinalValue}

function findFinalValue(nums: number[], original: number): number {
    const unique: Set<number> = new Set<number>(nums)

    while (unique.has(original)) {
        original *= 2
    }

    return original
}
