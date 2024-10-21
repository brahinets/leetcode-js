export {maxUniqueSplit}

function maxUniqueSplit(s: string): number {
    const seen: Set<string> = new Set<string>()

    return dfs(s, 0, seen, 0)
}

function dfs(s: string, start: number, seen: Set<string>, result: number): number {
    if (start === s.length) {
        result = Math.max(result, seen.size)

        return result
    }

    for (let i: number = start + 1; i <= s.length; i++) {
        const sub: string = s.substring(start, i)

        if (!seen.has(sub)) {
            seen.add(sub)
            result = dfs(s, i, seen, result)
            seen.delete(sub)
        }
    }

    return result
}
