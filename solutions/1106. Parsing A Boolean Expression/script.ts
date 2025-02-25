export {parseBoolExpr}

function parseBoolExpr(expression: string): boolean {
    const stack: string[] = []

    for (const char of expression) {
        if (char === ',') {
            continue
        }

        if (char === ')') {
            const seen: string[] = []

            while (stack[stack.length - 1] !== '(') {
                seen.push(stack.pop()!)
            }

            stack.pop()

            const operator: string = stack.pop()!
            if (operator === '&') {
                stack.push(seen.every((s: string): boolean => s === 't') ? 't' : 'f')
            } else if (operator === '|') {
                stack.push(seen.some((s: string): boolean => s === 't') ? 't' : 'f')
            } else if (operator === '!') {
                stack.push(seen[0] === 't' ? 'f' : 't')
            }
        } else {
            stack.push(char)
        }
    }

    return stack[0] === 't'
}
