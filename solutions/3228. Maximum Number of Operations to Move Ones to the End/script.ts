export {maxOperations}

function maxOperations(s: string): number {
    let onesCount: number = 0
    let operations: number = 0
    let index: number = 0

    while (index < s.length) {
        if (s[index] === "0") {
            while (index + 1 < s.length && s[index + 1] === "0") {
                index++
            }

            operations += onesCount
        } else {
            onesCount++
        }

        index++
    }

    return operations
}
