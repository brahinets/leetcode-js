export { gcdValues }

function gcdValues(nums: number[], queries: number[]): number[] {
    const maxNum: number = Math.max(...nums)
    const countPairs: Map<number, number> = new Map<number, number>()

    for (let i: number = 0; i < nums.length; i++) {
        const divisorsI: number[] = getDivisors(nums[i])
        for (let j: number = i + 1; j < nums.length; j++) {
            const gcdValue: number = gcd(nums[i], nums[j])
            countPairs.set(gcdValue, (countPairs.get(gcdValue) ?? 0) + 1)
        }
    }

    const gcdPairs: number[] = []
    for (const [gcdValue, count] of countPairs) {
        for (let k: number = 0; k < count; k++) {
            gcdPairs.push(gcdValue)
        }
    }

    gcdPairs.sort((a: number, b: number) => a - b)

    const result: number[] = []
    for (const query of queries) {
        result.push(gcdPairs[query])
    }

    return result
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp: number = b
        b = a % b
        a = temp
    }
    return a
}

function getDivisors(num: number): number[] {
    const divisors: number[] = []
    for (let i: number = 1; i * i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i)
            if (i !== num / i) {
                divisors.push(num / i)
            }
        }
    }
    return divisors.sort((a: number, b: number) => a - b)
}
