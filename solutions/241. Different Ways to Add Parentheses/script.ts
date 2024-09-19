export {diffWaysToCompute}

function diffWaysToCompute(expression: string): number[] {
    const results: number[] = []

    if (expression.length === 0) {
        return results
    }

    if (expression.length === 1) {
        results.push(Number(expression))
        return results
    }

    if (expression.length === 2 && !isNaN(Number(expression.charAt(0)))) {
        results.push(Number(expression))
        return results
    }

    for (let i: number = 0; i < expression.length; i++) {
        const currentChar: string = expression.charAt(i)

        if (!isNaN(Number(currentChar))) {
            continue
        }

        const leftResults: number[] = diffWaysToCompute(expression.substring(0, i))
        const rightResults: number[] = diffWaysToCompute(expression.substring(i + 1))

        for (const leftValue of leftResults) {
            for (const rightValue of rightResults) {
                results.push(evaluate(currentChar, leftValue, rightValue))
            }
        }
    }

    return results
}

function evaluate(currentChar: string, leftValue: number, rightValue: number): number {
    switch (currentChar) {
        case '+':
            return leftValue + rightValue
        case '-':
            return leftValue - rightValue
        case '*':
            return leftValue * rightValue
    }

    return 0
}
