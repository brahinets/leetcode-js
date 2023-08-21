export {repeatedSubstringPattern}

function repeatedSubstringPattern(s: string): boolean {
    for (let patternLength: number = 1; patternLength < s.length; patternLength++) {
        if (s.length % patternLength !== 0) {
            continue
        }

        const duplicatesNumber: number = s.length / patternLength
        if (s.substring(0, patternLength).repeat(duplicatesNumber) === s) {
            return true
        }
    }

    return false
}
