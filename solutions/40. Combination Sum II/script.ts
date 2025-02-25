export {combinationSum2}

function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a: number, b: number): number => a - b)

    return dfs(candidates, target, 0, [])
}

function dfs(candidates: number[], target: number, start: number, path: number[]): number[][] {
    if (target < 0) {
        return []
    }

    if (target === 0) {
        return [[...path]]
    }

    const result: number[][] = []
    for (let i: number = start; i < candidates.length; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) {
            continue
        }

        result.push(...dfs(candidates, target - candidates[i], i + 1, [...path, candidates[i]]))
    }

    return result
}
