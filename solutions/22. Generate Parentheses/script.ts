export {generateParenthesis}

function generateParenthesis(n: number): string[] {
    const result: string[] = []
    generateParenthesises(n, "", 0, 0, result)
    return [...new Set<string>(result)]
}

function generateParenthesises(n: number, s: string, opened: number, closed: number, data: string[]): void {
    if (n === 0) {
        return
    }

    if (opened === n && closed === n) {
        data.push(s)
        return
    }

    if (opened < n) {
        generateParenthesises(n, s + "(", opened + 1, closed, data)
    }

    if (closed < opened) {
        generateParenthesises(n, s + ")", opened, closed + 1, data)
    }
}
