export {mySqrt}

function mySqrt(x: number): number {
    if (x < 2) {
        return x
    }

    let left: number = 1
    let right: number = x
    let sqrt: number = 0

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)

        if (mid * mid <= x) {
            sqrt = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return sqrt
}
