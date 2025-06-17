export {countGoodArrays}

const MOD: number = 10 ** 9 + 7
const modBI: bigint = BigInt(MOD)

let fact: bigint[] = [1n]
let invFact: bigint[] = [1n]
let maxNProcessedForFactorials: number = 0

function countGoodArrays(n: number, m: number, k: number): number {
    if (m === 1) {
        return (k === n - 1) ? 1 : 0
    }

    const nForC: number = n - 1
    const kForC: number = k

    const cVal: bigint = combinations(nForC, kForC)

    const powerExponent: number = (n - 1) - k
    const mMinus1Val: bigint = BigInt(m - 1)
    const mMinus1PowVal: bigint = power(mMinus1Val, powerExponent)

    let ansBI: bigint = BigInt(m)
    ansBI = (ansBI * cVal) % modBI
    ansBI = (ansBI * mMinus1PowVal) % modBI

    if (ansBI < 0n) {
        ansBI += modBI
    }

    return Number(ansBI)
}

function power(base: bigint, exp: number): bigint {
    let res: bigint = 1n

    base %= modBI

    while (exp > 0) {
        if (exp % 2 === 1) res = (res * base) % modBI
        base = (base * base) % modBI
        exp = Math.floor(exp / 2)
    }

    return res
}

function inverse(nBI: bigint): bigint {
    return power(nBI, MOD - 2)
}

function ensureFactorialsComputedUpTo(nTarget: number): void {
    if (nTarget <= maxNProcessedForFactorials) {
        return
    }

    for (let i: number = maxNProcessedForFactorials + 1; i <= nTarget; i++) {
        if (fact.length <= i) {
            fact.length = i + 1
        }

        fact[i] = (fact[i - 1] * BigInt(i)) % modBI
    }

    if (invFact.length <= nTarget) {
        invFact.length = nTarget + 1
    }

    invFact[nTarget] = inverse(fact[nTarget])

    for (let i: number = nTarget - 1; i > maxNProcessedForFactorials; i--) {
        invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % modBI
    }

    maxNProcessedForFactorials = nTarget
}

function combinations(N: number, R: number): bigint {
    if (R < 0 || R > N) {
        return 0n
    }

    ensureFactorialsComputedUpTo(N)

    const numerator: bigint = fact[N]
    const denominatorPart1: bigint = invFact[R]
    const denominatorPart2: bigint = invFact[N - R]
    const denominator: bigint = (denominatorPart1 * denominatorPart2) % modBI

    return (numerator * denominator) % modBI
}
