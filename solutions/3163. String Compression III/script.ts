export {compressedString}

function compressedString(word: string): string {
    let comp: string = ''
    let i: number = 0

    while (i < word.length) {
        let consecutiveCount: number = 0
        const currentChar: string = word[i]

        while (i < word.length && consecutiveCount < 9 && word[i] === currentChar) {
            consecutiveCount++
            i++
        }

        comp += consecutiveCount + currentChar
    }

    return comp
}
