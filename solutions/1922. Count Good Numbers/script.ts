export {countGoodNumbers}

const mod: number = 1e9 + 7

function countGoodNumbers(n: number): number {
    const odd: number = Math.floor((n + 1) / 2)
    const even: number = Math.floor(n / 2)

    const goodDigits: bigint = modularExponentiation(5n, BigInt(odd), BigInt(mod))
    const evenDigits: bigint = modularExponentiation(4n, BigInt(even), BigInt(mod))

    return Number((goodDigits * evenDigits) % BigInt(mod))
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
