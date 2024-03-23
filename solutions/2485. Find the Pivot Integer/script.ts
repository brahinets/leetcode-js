export {pivotInteger}

function pivotInteger(n: number): number {
    const sum: number = n * (n + 1) / 2
    const pivot: number = Math.floor(Math.sqrt(sum))

    return pivot ** 2 === sum ? pivot : -1
}
