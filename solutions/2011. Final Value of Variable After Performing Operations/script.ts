export {finalValueAfterOperations}

function finalValueAfterOperations(operations: string[]): number {
    let add: number = operations.filter((operation: string): boolean => operation[1] === "+").length
    let subtract: number = operations.length - add

    return add - subtract
}
