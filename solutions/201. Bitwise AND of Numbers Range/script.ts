export {rangeBitwiseAnd}

function rangeBitwiseAnd(left: number, right: number): number {
    while (left < right) {
        right &= (right - 1)
    }

    return left & right
}
