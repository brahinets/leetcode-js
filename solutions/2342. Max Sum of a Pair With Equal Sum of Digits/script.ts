export {maximumSum}

function maximumSum(nums: number[]): number {
    const map: Map<number, number> = new Map<number, number>()
    let max: number = -1

    for (const num of nums) {
        const s: number = num.toString().split('').reduce((a: number, b: string): number => a + parseInt(b), 0)

        if (map.has(s)) {
            max = Math.max(max, num + map.get(s)!)
            map.set(s, Math.max(map.get(s)!, num))
        } else {
            map.set(s, num)
        }
    }

    return max
}
