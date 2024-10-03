export {minSubarray}

function minSubarray(nums: number[], p: number): number {
    const sum: number = nums.reduce((acc: number, cur: number): number => acc + cur, 0) % p
    if (sum === 0) {
        return 0
    }


    const map: Map<number, number> = new Map<number, number>([[0, -1]])
    let prefix: number = 0
    let result: number = nums.length
    for (let i: number = 0; i < nums.length; i++) {
        prefix += nums[i]
        prefix %= p

        const target: number = (prefix - sum + p) % p
        if (map.has(target)) {
            result = Math.min(result, i - map.get(target)!)
        }
        map.set(prefix, i)
    }

    return result === nums.length ? -1 : result
}
