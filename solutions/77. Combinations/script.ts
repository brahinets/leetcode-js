export {combine}

function solve(n: number, k: number, start: number, out: number[], result: number[][]): void {
    if (out.length === k) {
        result.push([...out])
        return
    }

    for (let i: number = start; i <= n; i++) {
        out.push(i)
        solve(n, k, i + 1, [...out], result)
        out.pop()
    }
}

function combine(n: number, k: number): number[][] {
    const result: number[][] = []
    const out: number[] = []

    solve(n, k, 1, [...out], result)

    return result
}
