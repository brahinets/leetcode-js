export {reversePrefix}

function reversePrefix(word: string, ch: string): string {
    let result: string = ""
    let found: boolean = false

    for (const char of word) {
        if (!found) {
            if(ch === char) {
                found = true
            }
            result = char + result
        } else {
            result = result + char
        }
    }

    return found ? result : word
}
