export {vowelStrings}

const VOWELS: Set<string> = new Set<string>(['a', 'e', 'i', 'o', 'u'])

function vowelStrings(words: string[], queries: number[][]): number[] {
    let result: number[] = []
    let prefixSum = prefixSums(words)

    for (const [left, right] of queries) {
        result.push(prefixSum[right] - (left == 0 ? 0 : prefixSum[left - 1]))
    }

    return result
}

function prefixSums(words: string[]): number[] {
    let prefixSum: number[] = []
    let sum: number = 0

    for (const word of words) {
        if (VOWELS.has(word.charAt(0)) && VOWELS.has(word.charAt(word.length - 1))) {
            sum++
        }

        prefixSum.push(sum)
    }

    return prefixSum;
}
