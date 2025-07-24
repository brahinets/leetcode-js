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

    let result: number = Infinity
    const dfs2 = (x: number, f: number, oth: number, anc: number): number => {
        let son: number = nums[x]
        for (const y of e[x]) {
            if (y === f) {
                continue
            }

            son ^= dfs2(y, x, oth, anc)
        }

        if (f === anc) {
            return son
        }

        result = Math.min(result, calc(oth, son, sum ^ oth ^ son))

        return son
    }

    const dfs = (x: number, f: number): number => {
        let son: number = nums[x]

        for (const y of e[x]) {
            if (y === f) {
                continue
            }

            son ^= dfs(y, x)
        }

        for (const y of e[x]) {
            if (y === f) {
                dfs2(y, x, son, x)
            }
        }

        return son
    }

    dfs(0, -1)

    return result
}

function calc(part1: number, part2: number, part3: number): number {
    return (
        Math.max(part1, Math.max(part2, part3)) -
        Math.min(part1, Math.min(part2, part3))
    )
}


