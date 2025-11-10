export {minOperations}

function minOperations(numbers: number[]): number {
    const stack: number[] = []
    let operationCount: number = 0

    for (const currentNumber of numbers) {
        while (stack.length > 0 && stack[stack.length - 1] > currentNumber) {
            stack.pop()
        }

        if (currentNumber === 0) {
            continue
        }

        if (stack.length === 0 || stack[stack.length - 1] < currentNumber) {
            operationCount++
            stack.push(currentNumber)
        }
    }

    return operationCount
}
