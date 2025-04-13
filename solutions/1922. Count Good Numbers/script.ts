export {countGoodNumbers}

const mod: bigint = BigInt(1e9 + 7)

function countGoodNumbers(n: number): number {
    const odd: bigint = BigInt(Math.floor((n + 1) / 2))
    const even: bigint = BigInt(Math.floor(n / 2))

    const part1: bigint = modularExponentiation(5n, odd, mod)
    const part2: bigint = modularExponentiation(4n, even, mod)

    return Number((part1 * part2) % mod)
}

function modularExponentiation(base: bigint, exponent: bigint, mod: bigint): bigint {
    let result: bigint = 1n

    base %= mod

    while (exponent > 0n) {
        if (exponent % 2n === 1n) {
            result = (result * base) % mod
        }

        base = (base * base) % mod
        exponent >>= 1n
    }

    return result
}
