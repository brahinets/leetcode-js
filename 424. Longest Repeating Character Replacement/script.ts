export {characterReplacement}

function characterReplacement(s: string, k: number): number {
    let chars: Set<string> = new Set(s.split(""));
    let maxWindowSize: number = 0;

    for (let char of chars) {
        let start: number = 0;

        for (let end: number = 0; end < s.length; end++) {
            while (!isValid(s.substring(start, end + 1), char, k)) {
                start++;
            }

            const windowSize: number = end + 1 - start;

            maxWindowSize = Math.max(maxWindowSize, windowSize);
        }
    }

    return maxWindowSize;
}

function isValid(str: string, baseChar: string, allowedReplacements: number): boolean {
    let requiredReplacements: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        if (str[i] !== baseChar) {
            requiredReplacements++;
        }
    }

    return requiredReplacements <= allowedReplacements;
}