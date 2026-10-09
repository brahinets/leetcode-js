export { minInsertions }

function minInsertions(s: string): number {
    let insertions: number = 0
    let requiredClosing: number = 0

    for (const character of s) {
        if (character === '(') {
            if (requiredClosing % 2 === 1) {
                insertions++
                requiredClosing--
            }

            requiredClosing += 2
        } else {
            requiredClosing--

            if (requiredClosing < 0) {
                insertions++
                requiredClosing += 2
            }
        }
    }

    return insertions + requiredClosing
}
