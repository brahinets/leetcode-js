export {longestPalindrome}

function longestPalindrome(words: string[]): number {
    const pairs: Map<string, number> = new Map<string, number>()
    let count: number = 0
    let hasOdd: boolean = false

    for (const word of words) {
        const reversed: string = word[1] + word[0]

        if (pairs.has(reversed)) {
            count += 2

            pairs.set(reversed, pairs.get(reversed)! - 1)

            if (pairs.get(reversed) === 0) {
                pairs.delete(reversed)
            }
        } else {
            pairs.set(word, (pairs.get(word) || 0) + 1)
        }
    }

    for (const [word, freq] of pairs.entries()) {
        if (word[0] === word[1] && freq > 0) {
            hasOdd = true
            break
        }
    }

    return count * 2 + (hasOdd ? 2 : 0)
}
