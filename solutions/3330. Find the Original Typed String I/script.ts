export {possibleStringCount}

function possibleStringCount(word: string): number {
    let count: number = 1

    for (let i: number = 1; i < word.length; i++) {
        if (word[i - 1] === word[i]) {
            count++
        }
    }

    return count
}
