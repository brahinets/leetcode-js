export {countPermutations}

const MOD: number = 10 ** 9 + 7

function countPermutations(complexity: number[]): number {
    for (let i: number = 1; i < complexity.length; i++) {
        if (complexity[i] <= complexity[0]) {
            return 0
        }
    }

    let permutations: number = 1
    for (let i: number = 2; i < complexity.length; i++) {
        permutations = (permutations * i) % MOD
    }

    return permutations
}
