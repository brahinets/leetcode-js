export {fullJustify}

function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = []
    let currentLineWords: string[] = []
    let currentLineLength: number = 0

    for (const word of words) {
        if (currentLineLength + currentLineWords.length + word.length > maxWidth) {
            result.push(justifyLine(currentLineWords, currentLineLength, maxWidth, false))
            currentLineWords = []
            currentLineLength = 0
        }

        currentLineWords.push(word)
        currentLineLength += word.length
    }

    if (currentLineWords.length > 0) {
        result.push(justifyLine(currentLineWords, currentLineLength, maxWidth, true))
    }

    return result
}

function justifyLine(currentLineWords: string[], currentLineLength: number, maxWidth: number, b: boolean): string {
    const numberOfWords: number = currentLineWords.length
    const totalSpaces: number = maxWidth - currentLineLength

    if (numberOfWords === 1 || b) {
        return currentLineWords.join(' ') + ' '.repeat(maxWidth - (currentLineLength + numberOfWords - 1))
    }

    const spacesBetweenWords: number = Math.floor(totalSpaces / (numberOfWords - 1))
    let extraSpaces: number = totalSpaces % (numberOfWords - 1)

    let line: string = ''
    for (let i: number = 0; i < numberOfWords; i++) {
        line += currentLineWords[i]
        if (i < numberOfWords - 1) {
            line += ' '.repeat(spacesBetweenWords + (extraSpaces > 0 ? 1 : 0))
            if (extraSpaces > 0) extraSpaces--
        }
    }

    return line
}
