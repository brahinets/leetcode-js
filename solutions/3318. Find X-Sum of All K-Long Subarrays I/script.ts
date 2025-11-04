export {findXSum}

function findXSum(nums: number[], k: number, x: number): number[] {
    const result: number[] = []

    for (let start: number = 0; start <= nums.length - k; start++) {
        const frequencyMap: Map<number, number> = new Map<number, number>()
        for (let index: number = start; index < start + k; index++) {
            frequencyMap.set(nums[index], (frequencyMap.get(nums[index]) || 0) + 1)
        }

        const frequencies: [number, number][] = Array.from(frequencyMap.entries()).map(
            ([num, count]: [number, number]): [number, number] => [count, num],
        )

        frequencies.sort((a: [number, number], b: [number, number]): number => (b[0] === a[0] ? b[1] - a[1] : b[0] - a[0]))
        let xSum: number = 0
        for (let i: number = 0; i < x && i < frequencies.length; i++) {
            xSum += frequencies[i][0] * frequencies[i][1]
        }

        result.push(xSum)
    }

    return result
}
