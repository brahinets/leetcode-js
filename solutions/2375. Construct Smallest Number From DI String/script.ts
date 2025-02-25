export {smallestNumber}

function smallestNumber(pattern: string): string {
    let result: string = ''
    let stack: number[] = []

    for (let i: number = 0; i <= pattern.length; i++) {
        stack.push(i + 1)

        if (i === pattern.length || pattern[i] === 'I') {
            while (stack.length > 0) {
                result += stack.pop()
            }
        }
    }

    return result
}
