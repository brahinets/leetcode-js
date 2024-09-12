export {countConsistentStrings}

function countConsistentStrings(allowed: string, words: string[]): number {
    let count: number = 0

    for (let i: number = 0; i < words.length; i++) {
        let isConsistent: boolean = true
        for (let j: number = 0; j < words[i].length; j++) {
            if (!allowed.includes(words[i][j])) {
                isConsistent = false
                break
            }
        }

        if (isConsistent) {
            count++
        }
    }

    return count
}
