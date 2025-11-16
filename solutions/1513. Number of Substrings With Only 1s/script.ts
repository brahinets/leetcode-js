export {numSub}

const MOD: number = 10 ** 9 + 7

function numSub(s: string): number {

    let count: number = 0
    let consecutiveOnes: number = 0

    for (const char of s) {
        if (char === '1') {
            consecutiveOnes += 1
            count = (count + consecutiveOnes) % MOD
        } else {
            consecutiveOnes = 0
        }
    }

    return count
}
