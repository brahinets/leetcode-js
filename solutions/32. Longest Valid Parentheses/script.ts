export {longestValidParentheses}

function longestValidParentheses(s: string): number {
    const stack: number[] = []
    let maxLength: number = 0
    let lastInvalidIndex: number = -1

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else if (stack.length > 0) {
            stack.pop()
            if (stack.length > 0) {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1])
            } else {
                maxLength = Math.max(maxLength, i - lastInvalidIndex)
            }
        } else {
            lastInvalidIndex = i
        }
    }

    return maxLength
}
