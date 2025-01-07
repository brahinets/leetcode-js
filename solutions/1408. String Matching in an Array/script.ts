export {stringMatching}

function stringMatching(words: string[]): string[] {
    const substrings: string[] = []

    for (let i: number = 0; i < words.length; i++) {
        for (let j: number = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[i])) {
                substrings.push(words[i])
                break
            }
        }
    }

    return substrings
}
