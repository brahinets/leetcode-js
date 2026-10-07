export { removeInvalidParentheses }

function removeInvalidParentheses(s: string): string[] {
    let leftToRemove: number = 0
    let rightToRemove: number = 0

    for (const character of s) {
        if (character === '(') {
            leftToRemove++
        } else if (character === ')') {
            if (leftToRemove > 0) {
                leftToRemove--
            } else {
                rightToRemove++
            }
        }
    }

    const results: Set<string> = new Set<string>()

    buildExpressions(s, 0, 0, 0, leftToRemove, rightToRemove, '', results)

    return Array.from(results)
}

function buildExpressions(
    s: string,
    index: number,
    openCount: number,
    closeCount: number,
    leftToRemove: number,
    rightToRemove: number,
    current: string,
    results: Set<string>
): void {
    if (index === s.length) {
        if (leftToRemove === 0 && rightToRemove === 0) {
            results.add(current)
        }

        return
    }

    const character: string = s[index]

    if (character === '(' && leftToRemove > 0) {
        buildExpressions(s, index + 1, openCount, closeCount, leftToRemove - 1, rightToRemove, current, results)
    } else if (character === ')' && rightToRemove > 0) {
        buildExpressions(s, index + 1, openCount, closeCount, leftToRemove, rightToRemove - 1, current, results)
    }

    if (character === '(') {
        buildExpressions(s, index + 1, openCount + 1, closeCount, leftToRemove, rightToRemove, current + character, results)
    } else if (character === ')') {
        if (closeCount < openCount) {
            buildExpressions(s, index + 1, openCount, closeCount + 1, leftToRemove, rightToRemove, current + character, results)
        }
    } else {
        buildExpressions(s, index + 1, openCount, closeCount, leftToRemove, rightToRemove, current + character, results)
    }
}
