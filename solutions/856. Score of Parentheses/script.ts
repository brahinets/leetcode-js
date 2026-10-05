export { scoreOfParentheses }

function scoreOfParentheses(s: string): number {
    const scoreStack: number[] = [0]

    for (const character of s) {
        if (character === '(') {
            scoreStack.push(0)
        } else {
            const innerScore: number = scoreStack.pop()!
            const scoreToAdd: number = innerScore === 0 ? 1 : innerScore * 2

            scoreStack[scoreStack.length - 1] += scoreToAdd
        }
    }

    return scoreStack[0]
}
