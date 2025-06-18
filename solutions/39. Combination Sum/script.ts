export {combinationSum}

function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = []
    const combination: number[] = []

    backtrack(0, target, result, combination, candidates)

    return result
}

function backtrack(start: number, remaining: number, result: number[][], combination: number[], candidates: number[]): void {
    if (remaining === 0) {
        result.push([...combination])
        return
    }

    if (remaining < 0) {
        return
    }

    for (let i: number = start; i < candidates.length; i++) {
        combination.push(candidates[i])

        backtrack(i, remaining - candidates[i], result, combination, candidates)

        combination.pop()
    }
}
