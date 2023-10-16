export {characterReplacement}

function characterReplacement(s: string, k: number): number {
    let chars: Set<string> = new Set(s.split(""))
    let maxWindowSize: number = 0

    for (let char of chars) {
        let start: number = 0
        let validChars: number = 0

        for (let end: number = 0; end < s.length; end++) {
            if (s[end] === char) {
                validChars++
            }

            let windowSize: number = end + 1 - start
            while (windowSize - validChars > k) {
                if (s[start] === char) {
                    validChars--
                }
                start++
                windowSize--
            }

            maxWindowSize = Math.max(maxWindowSize, windowSize)
        }
    }

    return maxWindowSize
}
