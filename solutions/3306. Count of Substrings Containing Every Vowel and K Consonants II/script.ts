export {countOfSubstrings}

function countOfSubstrings(word: string, k: number): number {
    return atLeastK(word, k) - atLeastK(word, k + 1)
}

function atLeastK(word: string, k: number): number {
    let numValidSubstrings: number = 0
    let start: number = 0
    let end: number = 0
    const vowelCount: Map<string, number> = new Map<string, number>()
    let consonantCount: number = 0

    while (end < word.length) {
        let newLetter: string = word.charAt(end)

        if (isVowel(newLetter)) {
            vowelCount.set(newLetter, (vowelCount.get(newLetter) ?? 0) + 1)
        } else {
            consonantCount++
        }

        while (vowelCount.size == 5 && consonantCount >= k) {
            numValidSubstrings += word.length - end

            let startLetter: string = word.charAt(start)
            if (isVowel(startLetter)) {
                vowelCount.set(startLetter, vowelCount.get(startLetter)! - 1)

                if (vowelCount.get(startLetter) == 0) {
                    vowelCount.delete(startLetter)
                }
            } else {
                consonantCount--
            }

            start++
        }

        end++
    }

    return numValidSubstrings
}

function isVowel(c: string): boolean {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
}
