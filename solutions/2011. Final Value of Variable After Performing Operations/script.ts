export {finalValueAfterOperations}

function finalValueAfterOperations(operations: string[]): number {
    let result: number = 0

    for (const operation of operations) {
        if (operation[1] === "+") {
            result++
        } else {
            result--
        }
    }

    return result
}
