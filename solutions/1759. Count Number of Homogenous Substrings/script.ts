export {countHomogenous}

const MOD: number = 1e9 + 7

function countHomogenous(s: string): number {
    let result: number = 0

    let current: number = 0
    for (let i: number = 0; i < s.length; i++) {
        if (i === 0 || s[i] === s[i - 1]) {
            current++
        } else {
            current = 1
        }

        result = (result + current) % MOD
    }

    return result % MOD
}
