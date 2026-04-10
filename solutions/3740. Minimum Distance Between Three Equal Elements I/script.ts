export { minimumDistance }

function minimumDistance(nums: number[]): number {
    const indicesByValue: Map<number, number[]> = new Map()

    for (let index: number = 0; index < nums.length; index++) {
        const value: number = nums[index]
        if (!indicesByValue.has(value)) {
            indicesByValue.set(value, [])
        }
        indicesByValue.get(value)!.push(index)
    }

    let minimumResult: number = -1

    for (const indices of indicesByValue.values()) {
        if (indices.length < 3) {
            continue
        }
        for (let position: number = 0; position + 2 < indices.length; position++) {
            const distance: number = 2 * (indices[position + 2] - indices[position])
            if (minimumResult === -1 || distance < minimumResult) {
                minimumResult = distance
            }
        }
    }

    return minimumResult
}
