export {subarrayBitwiseORs}

function subarrayBitwiseORs(arr: number[]): number {
    const seen: Set<number> = new Set<number>()
    let currentOr: number = 0

    for (let i: number = 0; i < arr.length; i++) {
        currentOr = 0

        for (let j: number = i; j < arr.length; j++) {
            currentOr |= arr[j]

            seen.add(currentOr)
        }
    }

    return seen.size
}
