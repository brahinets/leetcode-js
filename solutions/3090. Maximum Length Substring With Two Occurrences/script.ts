export {maximumLengthSubstring}

function maximumLengthSubstring(inputString: string): number {
    const characterCounts: Map<string, number> = new Map<string, number>()
    let windowStart: number = 0
    let longestLength: number = 0

    for (let windowEnd: number = 0; windowEnd < inputString.length; windowEnd++) {
        const currentCharacter: string = inputString[windowEnd]
        characterCounts.set(currentCharacter, (characterCounts.get(currentCharacter) ?? 0) + 1)

        while ((characterCounts.get(currentCharacter) ?? 0) > 2) {
            const characterToRemove: string = inputString[windowStart]
            characterCounts.set(characterToRemove, (characterCounts.get(characterToRemove) ?? 0) - 1)
            windowStart++
        }

        longestLength = Math.max(longestLength, windowEnd - windowStart + 1)
    }

    return longestLength
}
