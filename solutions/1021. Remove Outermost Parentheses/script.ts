export { removeOuterParentheses }

function removeOuterParentheses(s: string): string {
    const result: string[] = []
    let depth: number = 0

    for (const character of s) {
        if (character === '(') {
            if (depth > 0) {
                result.push(character)
            }

            depth++
        } else {
            depth--

            if (depth > 0) {
                result.push(character)
            }
        }
    }

    return result.join('')
}
