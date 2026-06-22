export {maxNumberOfBalloons}

function buildFrequencies(text: string): Map<string, number> {
    const frequencies: Map<string, number> = new Map<string, number>()

    for (const character of text) {
        frequencies.set(character, (frequencies.get(character) ?? 0) + 1)
    }

    return frequencies
}

function availableCount(frequencies: Map<string, number>, character: string, required: number): number {
    return Math.floor((frequencies.get(character) ?? 0) / required)
}

function maxNumberOfBalloons(text: string): number {
    const frequencies: Map<string, number> = buildFrequencies(text)

    return Math.min(
        availableCount(frequencies, 'b', 1),
        availableCount(frequencies, 'a', 1),
        availableCount(frequencies, 'l', 2),
        availableCount(frequencies, 'o', 2),
        availableCount(frequencies, 'n', 1),
    )
}
