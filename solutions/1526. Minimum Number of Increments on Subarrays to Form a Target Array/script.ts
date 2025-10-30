export {minNumberOperations}

function minNumberOperations(target: number[]): number {
    let operations: number = target[0]

    for (let i: number = 1; i < target.length; i++) {
        if (target[i] > target[i - 1]) {
            operations += target[i] - target[i - 1]
        }
    }

    return operations
}
