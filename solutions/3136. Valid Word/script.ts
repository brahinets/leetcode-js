export {isValid}

function isValid(word: string): boolean {
    if (word.length < 3) {
        return false
    }

    let hasVowel: boolean = false
    let hasConsonant: boolean = false

    for (const c of word) {
        if (/[a-zA-Z]/.test(c)) {
            const char: string = c.toLowerCase()

            if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
                hasVowel = true
            } else {
                hasConsonant = true
            }
        } else if (!/\d/.test(c)) {
            return false
        }
    }

    return hasVowel && hasConsonant
}
