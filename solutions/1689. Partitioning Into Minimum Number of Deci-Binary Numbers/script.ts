export { minPartitions }

function minPartitions(n: string): number {
    const digits: number[] = n.split('').map(Number)

    const maxDigit: number = Math.max(...digits)

    return maxDigit
}
