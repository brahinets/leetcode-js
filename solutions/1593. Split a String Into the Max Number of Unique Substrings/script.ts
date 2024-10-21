export {maxUniqueSplit}

function maxUniqueSplit(s: string): number {
    const seen: Set<string> = new Set<string>()
    let result: number = 0

    const dfs = (start: number): void => {
        if (start === s.length) {
            result = Math.max(result, seen.size)
            return
        }

        for (let i = start + 1; i <= s.length; i++) {
            const sub = s.substring(start, i)
            if (!seen.has(sub)) {
                seen.add(sub)
                dfs(i)
                seen.delete(sub)
            }
        }
    }

    dfs(0)
    return result
}
