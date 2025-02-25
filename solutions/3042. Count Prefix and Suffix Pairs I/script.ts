export {countPrefixSuffixPairs}

function countPrefixSuffixPairs(words: string[]): number {
    let count: number = 0

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            const first: string = words[i]
            const second: string = words[j]

            if (second.startsWith(first) && second.endsWith(first)) {
                count++
            }
        }
    }

    return count
}
