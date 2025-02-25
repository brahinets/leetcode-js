export {construct2DArray}

function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (m * n !== original.length) {
        return []
    }

    const result: number[][] = []
    for (let i = 0; i < m; i++) {
        result.push(original.slice(i * n, i * n + n))
    }

    return result
}
