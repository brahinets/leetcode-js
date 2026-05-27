export {numberOfSpecialChars}

function numberOfSpecialChars(word: string): number {
    const lastLowerIndex: Map<string, number> = new Map<string, number>()
    const firstUpperIndex: Map<string, number> = new Map<string, number>()

    for (let position: number = 0; position < word.length; position++) {
        const character: string = word[position]

        if (character >= 'a' && character <= 'z') {
            lastLowerIndex.set(character, position)
        } else if (!firstUpperIndex.has(character)) {
            firstUpperIndex.set(character, position)
        }
    }

    let count: number = 0

    for (const [lower, lastPosition] of lastLowerIndex) {
        const upper: string = lower.toUpperCase()
        const firstPosition: number | undefined = firstUpperIndex.get(upper)

        if (firstPosition !== undefined && lastPosition < firstPosition) {
            count++
        }
    }

    return count
}
