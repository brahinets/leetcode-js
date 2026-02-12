export { longestBalanced }

function longestBalanced(s: string): number {
    const n: number = s.length
    let maxLength: number = 0

    for (let i: number = 0; i < n; i++) {
        const charCount: Map<string, number> = new Map()
        let maxFrequency: number = 0

        for (let j: number = i; j < n; j++) {
            const char: string = s[j]
            const count: number = (charCount.get(char) || 0) + 1
            charCount.set(char, count)
            maxFrequency = Math.max(maxFrequency, count)

            const distinctCount: number = charCount.size
            const substringLength: number = j - i + 1

            if (maxFrequency * distinctCount === substringLength) {
                maxLength = Math.max(maxLength, substringLength)
            }
        }
    }

    return maxLength
}
