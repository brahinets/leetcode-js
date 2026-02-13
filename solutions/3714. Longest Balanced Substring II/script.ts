export { longestBalanced }

function longestBalanced(s: string): number {
    const length: number = s.length
    let result: number = 0

    for (let distinctCount = 1; distinctCount <= 26; distinctCount++) {
        for (let frequency = Math.floor(length / distinctCount); frequency >= 1; frequency--) {
            if (distinctCount * frequency <= result) {
                break
            }

            if (hasBalancedWindow(s, distinctCount, frequency)) {
                result = distinctCount * frequency
                break
            }
        }
    }

    return result
}

function hasBalancedWindow(s: string, distinctCount: number, frequency: number): boolean {
    const length: number = s.length
    const windowSize: number = distinctCount * frequency

    if (windowSize > length) {
        return false
    }

    const charFrequency: Map<string, number> = new Map()
    const frequencyCount: Map<number, number> = new Map()

    const addChar = (char: string): void => {
        const oldFrequency: number = charFrequency.get(char) ?? 0

        if (oldFrequency > 0) {
            const count: number = frequencyCount.get(oldFrequency)! - 1

            if (count === 0) {
                frequencyCount.delete(oldFrequency)
            } else {
                frequencyCount.set(oldFrequency, count)
            }
        }

        charFrequency.set(char, oldFrequency + 1)
        frequencyCount.set(oldFrequency + 1, (frequencyCount.get(oldFrequency + 1) ?? 0) + 1)
    }

    const removeChar = (char: string): void => {
        const oldFrequency: number = charFrequency.get(char)!
        const count: number = frequencyCount.get(oldFrequency)! - 1

        if (count === 0) {
            frequencyCount.delete(oldFrequency)
        } else {
            frequencyCount.set(oldFrequency, count)
        }

        if (oldFrequency === 1) {
            charFrequency.delete(char)
        } else {
            charFrequency.set(char, oldFrequency - 1)
            frequencyCount.set(oldFrequency - 1, (frequencyCount.get(oldFrequency - 1) ?? 0) + 1)
        }
    }

    const isBalanced = (): boolean =>
        charFrequency.size === distinctCount && frequencyCount.size === 1 && frequencyCount.has(frequency)

    for (let index = 0; index < windowSize; index++) {
        addChar(s[index])
    }

    if (isBalanced()) {
        return true
    }

    for (let right = windowSize; right < length; right++) {
        addChar(s[right])
        removeChar(s[right - windowSize])

        if (isBalanced()) {
            return true
        }
    }

    return false
}
