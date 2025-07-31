export {subarrayBitwiseORs}

function subarrayBitwiseORs(arr: number[]): number {
    const result: Set<number> = new Set<number>()
    let current: Set<number> = new Set<number>([0])

    for (const x of arr) {
        const newCurrent: Set<number> = new Set()
        for (const y of current) {
            newCurrent.add(x | y)
        }
        newCurrent.add(x)

        current = newCurrent

        for (const val of current) {
            result.add(val)
        }
    }

    return result.size
}
