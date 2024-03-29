export {evalRPN}

const OPERATORS: Map<string, (a: number, b: number) => number> = new Map([
    ["+", (a: number, b: number): number => a + b],
    ["-", (a: number, b: number): number => a - b],
    ["*", (a: number, b: number): number => a * b],
    ["/", (a: number, b: number): number => Math.trunc(a / b)],
])

function evalRPN(tokens: string[]): number {
    while (tokens.length > 1) {
        const processableTokenIndex: number = findProcessableTokenIndex(tokens)
        if (processableTokenIndex === -1) {
            throw new Error("No processable token found")
        }

        const result: number = evaluate(
            Number(tokens[processableTokenIndex - 2]),
            Number(tokens[processableTokenIndex - 1]),
            tokens[processableTokenIndex]
        )

        tokens.splice(processableTokenIndex - 2, 3, `${result}`)
    }

    return Number(tokens[0])
}

function evaluate(num1: number, num2: number, token: string): number {
    const fun: ((a: number, b: number) => number) | undefined = OPERATORS.get(token)
    if (fun === undefined) {
        throw new Error("Not processable token")
    } else {
        return fun(num1, num2)
    }
}

function findProcessableTokenIndex(token: string[]): number {
    for (let i: number = 2; i < token.length; i++) {
        if (OPERATORS.has(token[i])) {
            const first: number = Number(token[i - 1])
            const second: number = Number(token[i - 2])
            if (!Number.isNaN(second) && !Number.isNaN(first)) {
                return i
            }
        }
    }

    return -1
}
