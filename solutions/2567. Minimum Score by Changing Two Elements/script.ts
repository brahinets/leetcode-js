export { minimizeSum }

function minimizeSum(numbers: number[]): number {
    const sorted: number[] = [...numbers].sort(
        (first: number, second: number): number => first - second
    )
    const last: number = sorted.length - 1

    return Math.min(
        sorted[last] - sorted[2],
        sorted[last - 1] - sorted[1],
        sorted[last - 2] - sorted[0]
    )
}
