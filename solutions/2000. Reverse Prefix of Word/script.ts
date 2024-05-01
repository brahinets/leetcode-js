export {reversePrefix}

function reversePrefix(word: string, ch: string): string {
    const index: number = word.indexOf(ch)

    if (index === -1) {
        return word
    } else {
        return reverse(word.slice(0, index + 1)) + word.slice(index + 1)
    }
}

function reverse(string: string): string {
    return string.split('').reverse().join('')
}
