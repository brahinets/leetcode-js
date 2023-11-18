export {partitionString}

function partitionString(s: string): number {
    let count: number = 0

    let partition: string[] = []
    for (const char of s) {
        if (partition.some((c: string): boolean => c === char)) {
            partition = []
            count++
        }

        partition.push(char)
    }

    if (partition.length > 0) {
        count++
    }

    return count
}
