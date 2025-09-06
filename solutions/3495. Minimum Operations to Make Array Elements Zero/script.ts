export {minOperations}

function minOperations(queries: number[][]): number {
    let min: bigint = 0n

    for (const query of queries) {
        const count1: bigint = countTotalOperationsUpTo(query[1])
        const count2: bigint = countTotalOperationsUpTo(query[0] - 1)

        min += (count1 - count2 + 1n) / 2n
    }

    return Number(min)
}

function countTotalOperationsUpTo(num: number): bigint {
    let count: bigint = 0n
    let i: number = 1
    let base: number = 1

    while (base <= num) {
        const end: number = Math.min(base * 2 - 1, num)

        count += BigInt(Math.floor((i + 1) / 2)) * BigInt(end - base + 1)

        i++

        base *= 2
    }

    return count
}
