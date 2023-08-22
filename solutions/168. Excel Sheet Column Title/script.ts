export {convertToTitle}

function convertToTitle(columnNumber: number): string {
    const ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let result: string = ""

    if (columnNumber > ALPHABET.length) {
        const n: number = Math.floor(columnNumber / ALPHABET.length)
        result = convertToTitle(n) + result
        columnNumber -= (n * ALPHABET.length)
    }

    return result + ALPHABET[columnNumber - 1]
}
