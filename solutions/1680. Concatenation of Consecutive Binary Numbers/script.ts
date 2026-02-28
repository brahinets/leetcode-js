export { concatenatedBinary }

const MOD: bigint = 1_000_000_007n

function concatenatedBinary(n: number): number {
    let result: bigint = 0n
    let bits: bigint = 0n

    for (let i:number = 1; i <= n; i++) {
        if ((i & (i - 1)) === 0) {
            bits++
        }

        result = ((result << bits) | BigInt(i)) % MOD
    }

    return Number(result)
}
