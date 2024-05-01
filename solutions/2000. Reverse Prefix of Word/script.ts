export {reversePrefix}

function reversePrefix(word: string, ch: string): string {
    let result: string = ""
    let found: boolean = false

    for (const char of word) {
        if (found) {
            result = result + char
        } else {
            if (ch === char) {
                found = true
            }
            result = char + result
        }
    }

    return found ? result : word
}
