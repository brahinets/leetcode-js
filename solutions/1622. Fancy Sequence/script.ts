export { Fancy }

const MOD = 1_000_000_007n

function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
    let result: bigint = 1n
    base = base % mod

    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod
        }

        exp = exp / 2n

        base = (base * base) % mod
    }

    return result
}

function modInverse(a: bigint): bigint {
    return modPow(a, MOD - 2n, MOD)
}

class Fancy {
    private seq: bigint[]
    private mult: bigint
    private add: bigint

    constructor() {
        this.seq = []
        this.mult = 1n
        this.add = 0n
    }

    append(val: number): void {
        const normalized: bigint = (((BigInt(val) - this.add) % MOD + MOD) % MOD * modInverse(this.mult)) % MOD

        this.seq.push(normalized)
    }

    addAll(inc: number): void {
        this.add = (this.add + BigInt(inc)) % MOD
    }

    multAll(m: number): void {
        const bm: bigint = BigInt(m)
        this.mult = (this.mult * bm) % MOD
        this.add = (this.add * bm) % MOD
    }

    getIndex(idx: number): number {
        if (idx >= this.seq.length) {
            return -1
        }

        return Number((this.mult * this.seq[idx] % MOD + this.add) % MOD)
    }
}
