export {removeAnagrams}

function removeAnagrams(words: string[]): string[] {
    const unique: string[] = []

    let prevSorted: string = ''
    for (const word of words) {
        const sorted: string = word.split('').sort().join('')

        if (sorted !== prevSorted) {
            unique.push(word)
            prevSorted = sorted
        }
    }

    return unique
}
