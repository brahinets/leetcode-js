export { smallestSubsequence }

function smallestSubsequence(s: string): string {
    const lastIndex: Map<string, number> = new Map<string, number>()
    const inStack: Set<string> = new Set<string>()
    const stack: string[] = []

    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i)
    }

    for (let i = 0; i < s.length; i++) {
        const char: string = s[i]

        if (inStack.has(char)) {
            continue
        }

        while (
            stack.length > 0 &&
            stack[stack.length - 1] > char &&
            lastIndex.get(stack[stack.length - 1])! > i
        ) {
            const removed: string = stack.pop()!
            inStack.delete(removed)
        }

        stack.push(char)
        inStack.add(char)
    }

    return stack.join('')
}
