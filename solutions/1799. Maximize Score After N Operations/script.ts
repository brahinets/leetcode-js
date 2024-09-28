import {arrayOf} from "../../common/array-factories"

export {maxScore}

function maxScore(nums: number[]): number {
    const memo: Map<string, number> = new Map<string, number>()
    const used: boolean[] = arrayOf(false, nums.length)

    return backtrack(nums, nums.length / 2, 1, memo, used)
}

function backtrack(
    nums: number[],
    num: number,
    step: number,
    memo: Map<string, number>,
    used: boolean[]
): number {
    const key: string = `${used.join(',')},${step}`

    if (memo.has(key)) {
        return memo.get(key)!
    }

    if (step > num) {
        return 0
    }

    let max: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        if (used[i]) {
            continue
        }

        for (let j: number = i + 1; j < nums.length; j++) {
            if (used[j]) {
                continue
            }

            const gcdValue: number = gcd(nums[i], nums[j])
            used[i] = true
            used[j] = true

            const currentScore: number = step * gcdValue + backtrack(nums, num, step + 1, memo, used)
            used[i] = false
            used[j] = false

            max = Math.max(max, currentScore)
        }
    }

    memo.set(key, max)
    return max
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a
    }

    return gcd(b, a % b)
}
