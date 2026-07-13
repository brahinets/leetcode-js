function findRepeatedDnaSequences(s: string): string[] {
    const sequenceLength: number = 10
    const sequenceCount: Map<string, number> = new Map<string, number>()
    const result: string[] = []

    if (s.length < sequenceLength) {
        return result
    }

    for (let i: number = 0; i <= s.length - sequenceLength; i++) {
        const sequence: string = s.slice(i, i + sequenceLength)
        const count: number = (sequenceCount.get(sequence) ?? 0) + 1
        sequenceCount.set(sequence, count)

        if (count === 2) {
            result.push(sequence)
        }
    }

    return result
}

export { findRepeatedDnaSequences }
