export {minimizedMaximum}

function canDistribute(x: number, quantities: number[], n: number): boolean {
    let j: number = 0
    let remaining: number = quantities[j]

    for (let i: number = 0; i < n; i++) {
        if (remaining <= x) {
            j++

            if (j === quantities.length) {
                return true
            }

            remaining = quantities[j]
        } else {
            remaining -= x
        }
    }

    return false
}

function minimizedMaximum(n: number, quantities: number[]): number {
    let left: number = 1
    let right: number = Math.max(...quantities)

    while (left < right) {
        const middle: number = Math.floor((left + right) / 2)
        if (canDistribute(middle, quantities, n)) {
            right = middle
        } else {
            left = middle + 1
        }
    }

    return left
}
