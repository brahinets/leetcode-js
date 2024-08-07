export {minOperations}

function minOperations(logs: string[]): number {
    const stack: string[] = []

    for (const action of logs) {
        if (action === '../') {
            stack.pop()
        } else if (action !== './') {
            stack.push(action)
        }
    }

    return stack.length
}
