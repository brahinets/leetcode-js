export {lexicalOrder}

function lexicalOrder(n: number): number[] {
    if (n <= 0) {
        return []
    }

    const result: number[] = []

    for (let i: number = 1; i < 10; i++) {
        dfs(i, n, result)
    }

    return result
}

function dfs(num: number, n: number, result: number[]): void {
    if (num > n) {
        return
    }

    result.push(num)

    const nextBase: number = num * 10
    if (nextBase > n) {
        return
    }

    for (let i: number = 0; i < 10; i++) {
        dfs(nextBase + i, n, result)
    }
}
