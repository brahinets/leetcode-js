export {judgePoint24}

const operations: ((a: number, b: number) => number)[] = [
    (a: number, b: number): number => a + b,
    (a: number, b: number): number => a - b,
    (a: number, b: number): number => a * b,
    (a: number, b: number): number => a / b
]

function judgePoint24(cards: number[]): boolean {
    const target = 24

    return dfs(cards, target)
}

function dfs(nums: number[], target: number): boolean {
    if (nums.length === 1) {
        return Math.abs(nums[0] - target) < 1e-6
    }

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; j < nums.length; j++) {
            if (i !== j) {
                const nextNums: number[] = nums
                    .filter((_: number, index: number): boolean => index !== i && index !== j)

                for (const op of operations) {
                    if (op === operations[3] && nums[j] === 0) {
                        continue
                    }

                    const result: number = op(nums[i], nums[j])
                    nextNums.push(result)
                    if (dfs(nextNums, target)) {
                        return true
                    }
                    nextNums.pop()
                }
            }
        }
    }

    return false
}
