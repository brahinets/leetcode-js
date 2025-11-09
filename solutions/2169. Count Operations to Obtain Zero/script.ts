export {countOperations}

function countOperations(num1: number, num2: number): number {
    let a: number = num1
    let b: number = num2
    let operations: number = 0

    while (a !== 0 && b !== 0) {
        if (a >= b) {
            a -= b
        } else {
            b -= a
        }

        operations++
    }

    return operations
}
