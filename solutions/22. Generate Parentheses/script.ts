export {generateParenthesis}

function generateParenthesis(n: number): string[] {
    const result: string[] = []
    generateParenthesises(n, "", result)
    return [...new Set<string>(result)]
}

function generateParenthesises(n: number, s: string, data: string[]): void {
    if (n === 0) {
        if (s !== "") {
            data.push(s)
        }
        return
    }

    generateParenthesises(n - 1, s + "()", data)
    generateParenthesises(n - 1, "(" + s + ")", data)
    generateParenthesises(n - 1, "()" + s, data)
}
