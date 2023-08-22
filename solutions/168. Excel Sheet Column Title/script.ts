export {convertToTitle}

function convertToTitle(columnNumber: number): string {
    const ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let result: string = ""

    while (columnNumber > 0) {
        let n: number

        if (columnNumber > ALPHABET.length) {
            n = Math.floor(columnNumber / ALPHABET.length)
        } else {
            n = columnNumber
        }
        const letter: string = ALPHABET[n - 1]

        columnNumber -= (n * ALPHABET.length)
        result += letter
    }

    return result
}
