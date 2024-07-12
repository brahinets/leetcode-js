export {maximumGain}

function maximumGain(s: string, x: number, y: number): number {
    const [max, low, maxScore, lowScore]: [string, string, number, number] = x > y ? ['ab', 'ba', x, y] : ['ba', 'ab', y, x]

    let left: string[]
    let expensive: number
    let cheap: number

    [left, expensive] = maximize(s, max, maxScore);
    [left, cheap] = maximize(left.join(""), low, lowScore)

    return cheap + expensive
}

function maximize(s: string, string: string, stringScore: number): [string[], number] {
    let stack: string[] = []
    let score: number = 0

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] + char === string) {
            stack.pop()
            score += stringScore
        } else {
            stack.push(char)
        }
    }

    return [stack, score]
}
