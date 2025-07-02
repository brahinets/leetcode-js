import {arrayOf} from "../../common/array-factories"

export {possibleStringCount}

const mod: number = 10 ** 9 + 7

function possibleStringCount(word: string, k: number): number {
    const frequencies: number[] = getFrequencies(word)
    const baseCount: number = getBaseCount(frequencies, mod)

    if (frequencies.length >= k) {
        return baseCount
    }

    const excludedCount: number = getExcludedCount(frequencies, k, mod)
    return (baseCount - excludedCount + mod) % mod
}

function getFrequencies(word: string): number[] {
    const frequencies: number[] = []
    let count: number = 1

    for (let i: number = 1; i < word.length; i++) {
        if (word[i] === word[i - 1]) {
            count++
        } else {
            frequencies.push(count)
            count = 1
        }
    }

    frequencies.push(count)

    return frequencies
}

function getBaseCount(frequencies: number[], mod: number): number {
    let result: number = 1

    for (const freq of frequencies) {
        result = (result * freq) % mod
    }

    return result
}

function getExcludedCount(frequencies: number[], k: number, mod: number): number {
    let g: number[] = arrayOf(1, k)

    for (let i: number = 0; i < frequencies.length; i++) {
        const fNew: number[] = new Array(k).fill(0)

        for (let j: number = 1; j < k; j++) {
            fNew[j] = g[j - 1]

            if (j - frequencies[i] - 1 >= 0) {
                fNew[j] = (fNew[j] - g[j - frequencies[i] - 1] + mod) % mod
            }
        }

        const gNew: number[] = new Array(k).fill(0)
        gNew[0] = fNew[0]

        for (let j: number = 1; j < k; j++) {
            gNew[j] = (gNew[j - 1] + fNew[j]) % mod
        }

        g = gNew
    }

    return g[k - 1]
}
