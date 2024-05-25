export {wordBreak}

function wordBreak(s: string, wordDict: string[]): string[] {
    const dictionary: Set<string> = new Set<string>(wordDict)
    const memo: Map<string, string[]> = new Map<string, string[]>()

    return dfs(s, dictionary, memo)
}

function dfs(remaining: string, dict: Set<string>, memo: Map<string, string[]>): string[] {
    if (memo.has(remaining)) {
        return memo.get(remaining)!
    }

    if (remaining.length === 0) {
        return [remaining]
    }

    const results: string[] = []
    for (let i: number = 1; i <= remaining.length; i++) {
        const current: string = remaining.substring(0, i)

        if (dict.has(current)) {
            for (const next of dfs(remaining.substring(i), dict, memo)) {
                results.push(current + (next.length > 0 ? " " : "") + next)
            }
        }
    }

    memo.set(remaining, results)

    return results
}
