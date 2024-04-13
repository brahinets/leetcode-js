export {maxDepth}

function maxDepth(s: string): number {
    let depth: number = 0

    const openedBraces: string[] = []
    for (const ch of s) {
        if (ch === '(') {
            openedBraces.push(ch)
        } else if (ch === ')') {
            openedBraces.pop()
        }

        depth = Math.max(depth, openedBraces.length)
    }

    return depth
}
