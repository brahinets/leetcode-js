export {numFactoredBinaryTrees}

const MOD: number = 10 ** 9 + 7

function numFactoredBinaryTrees(arr: number[]): number {
    arr.sort((a, b) => a - b)

    const dp: Map<number, number> = new Map<number, number>()
    for (let i: number = 0; i < arr.length; i++) {
        dp.set(arr[i], 1)
    }

    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = 0; j < i; j++) {
            if (arr[i] % arr[j] === 0 && dp.has(arr[i] / arr[j])) {
                dp.set(arr[i], dp.get(arr[i])! + dp.get(arr[j])! * dp.get(arr[i] / arr[j])!)
            }
        }
    }

    return [...dp.values()].reduce((total: number, value: number): number => total + value, 0) % MOD
}
