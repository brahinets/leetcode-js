export {minimumOneBitOperations}

function minimumOneBitOperations(n: number): number {
    return grayCode(n)
}

function grayCode(n: number): number {
    n ^= n >> 16
    n ^= n >> 8
    n ^= n >> 4
    n ^= n >> 2
    n ^= n >> 1

    return n
}
