export {numberOfSpecialChars}

function numberOfSpecialChars(word: string): number {
    const characters: Set<string> = new Set<string>(word)

    let count: number = 0

    for (let code: number = 65; code <= 90; code++) {
        const upper: string = String.fromCharCode(code)
        const lower: string = upper.toLowerCase()

        if (characters.has(upper) && characters.has(lower)) {
            count++
        }
    }

    return count
}
