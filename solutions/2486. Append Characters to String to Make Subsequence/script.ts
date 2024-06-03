export {appendCharacters}

function appendCharacters(s: string, t: string): number {
    let prefix: number = 0

    for (const char of s) {
        if (prefix === t.length) {
            break
        }

        if (char == t.charAt(prefix)) {
            prefix++
        }
    }

    return t.length - prefix
}
