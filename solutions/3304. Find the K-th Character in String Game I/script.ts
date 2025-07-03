export {kthCharacter}

function kthCharacter(k: number): string {
    let word: string = 'a'

    while (word.length < k) {
        word += nextString(word)
    }

    return word[k - 1]
}

function nextString(s: string): string {
    return s.split('')
        .map((c: string): string => nextChar(c))
        .join('')
}

function nextChar(c: string): string {
    return c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1)
}
