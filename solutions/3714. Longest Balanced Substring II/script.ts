export { longestBalanced }

function longestBalanced(s: string): number {
    const length: number = s.length
    let result: number = 0

    for (let distinctCount = 1; distinctCount <= 26; distinctCount++) {
        for (let frequency = Math.floor(length / distinctCount); frequency >= 1; frequency--) {
            const windowSize = distinctCount * frequency

            if (windowSize <= result) {
                break
            }

            if (hasBalancedWindow(s, length, distinctCount, frequency, windowSize)) {
                result = windowSize
                break
            }
        }
    }

    return result
}

function hasBalancedWindow(
    s: string,
    length: number,
    distinctCount: number,
    frequency: number,
    windowSize: number
): boolean {
    if (windowSize > length) {
        return false
    }

    const charFreq: number[] = new Array(26).fill(0)
    const freqCount: number[] = new Array(windowSize + 1).fill(0)
    let distinctChars: number = 0
    const aCode: number = 97 // 'a'.charCodeAt(0)

    const addChar = (charCode: number): void => {
        const idx: number = charCode - aCode
        const oldFreq: number = charFreq[idx]

        if (oldFreq > 0) {
            freqCount[oldFreq]--
        } else {
            distinctChars++
        }

        const newFreq: number = oldFreq + 1
        charFreq[idx] = newFreq
        freqCount[newFreq]++
    }

    const removeChar = (charCode: number): void => {
        const idx: number = charCode - aCode
        const oldFreq: number = charFreq[idx]

        freqCount[oldFreq]--

        const newFreq: number = oldFreq - 1
        charFreq[idx] = newFreq
        
        if (newFreq === 0) {
            distinctChars--
        } else {
            freqCount[newFreq]++
        }
    }

    const isBalanced = (): boolean =>
        distinctChars === distinctCount && freqCount[frequency] === distinctCount

    for (let i = 0; i < windowSize; i++) {
        addChar(s.charCodeAt(i))
    }

    if (isBalanced()) {
        return true
    }

    for (let right = windowSize; right < length; right++) {
        addChar(s.charCodeAt(right))
        removeChar(s.charCodeAt(right - windowSize))

        if (isBalanced()) {
            return true
        }
    }

    return false
}
