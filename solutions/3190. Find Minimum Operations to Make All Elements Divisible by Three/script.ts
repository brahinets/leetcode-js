export {minimumOperations}

function minimumOperations(numbers: number[]): number {
    let totalOperations: number = 0

    for (const number of numbers) {
        const remainder: number = number % 3
        const operationsNeeded: number = Math.min(3 - remainder, remainder)

        totalOperations += operationsNeeded
    }

    return totalOperations
}
