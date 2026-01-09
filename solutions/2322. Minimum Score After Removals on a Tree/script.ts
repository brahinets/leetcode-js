import {arrayOf} from "../../common/array-factories"

export {minimumScore}

function minimumScore(nums: number[], edges: number[][]): number {
    const e: number[][] = arrayOf([], nums.length)
    for (const [u, v] of edges) {
        e[u].push(v)
        e[v].push(u)
    }

    let sum: number = 0
    for (const x of nums) {
        sum ^= x
    }

    const context: { result: number; sum: number } = {
        result: Infinity,
        sum: sum
    }

    dfs(0, -1, nums, e, context)

    return context.result
}

function calc(part1: number, part2: number, part3: number): number {
    return (
        Math.max(part1, Math.max(part2, part3)) -
        Math.min(part1, Math.min(part2, part3))
    )
}

function dfs2(
    x: number,
    f: number,
    oth: number,
    anc: number,
    nums: number[],
    e: number[][],
    context: { result: number; sum: number }
): number {
    let son: number = nums[x]
    for (const y of e[x]) {
        if (y === f) {
            continue
        }

        son ^= dfs2(y, x, oth, anc, nums, e, context)
    }

    if (f === anc) {
        return son
    }

    context.result = Math.min(context.result, calc(oth, son, context.sum ^ oth ^ son))

    return son
}

function dfs(
    x: number,
    f: number,
    nums: number[],
    e: number[][],
    context: { result: number; sum: number }
): number {
    let son: number = nums[x]

    for (const y of e[x]) {
        if (y === f) {
            continue
        }

        son ^= dfs(y, x, nums, e, context)
    }

    for (const y of e[x]) {
        if (y === f) {
            dfs2(y, x, son, x, nums, e, context)
        }
    }

    return son
}
