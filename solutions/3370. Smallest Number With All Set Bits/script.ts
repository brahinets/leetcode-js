export {smallestNumber}

function smallestNumber(n: number): number {
    const bitLength: number = n.toString(2).length

    return (1 << bitLength) - 1
}
