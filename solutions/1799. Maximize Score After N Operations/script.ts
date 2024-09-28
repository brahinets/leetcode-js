export {maxScore}

function maxScore(nums: number[]): number {
    const memo: Map<string, number> = new Map<string, number>()

    return backtrack(nums, null, 1, memo)
}

function backtrack(
    nums: number[],
    num: number | null,
    step: number,
    memo: Map<string, number>
): number {
    if (nums.length === 0) {
        return 0
    }

    const key: string = `${nums.join(',')},${num},${step}`
    if (memo.has(key)) {
        return memo.get(key)!
    }

    let max: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        const next: number[] = [...nums.slice(0, i), ...nums.slice(i + 1)]

        if (num !== null) {
            const gcdValue: number = gcd(num, nums[i])
            const rest: number = backtrack(next, null, step + 1, memo)

            max = Math.max(max, step * gcdValue + rest)
        } else {
            const rest: number = backtrack(next, nums[i], step, memo)

            max = Math.max(max, rest)
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
