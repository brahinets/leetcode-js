export {maximumGain}

function maximumGain(s: string, x: number, y: number): number {
    const [max, low, maxScore, lowScore]: [string, string, number, number] = x > y ? ['ab', 'ba', x, y] : ['ba', 'ab', y, x]

    let score = 0
    let stack: string[] = []
    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] + char === max) {
            stack.pop()
            score += maxScore
        } else {
            stack.push(char)
        }
    }

    let newStack: string[] = []
    for (let char of stack) {
        if (newStack.length > 0 && newStack[newStack.length - 1] + char === low) {
            newStack.pop()
            score += lowScore
        } else {
            newStack.push(char)
        }
    }
    return score
}
