export {numOfSubarrays}

const MOD: number = 10 ** 9 + 7

function numOfSubarrays(arr: number[]): number {
    let oddCount: number = 0
    let evenCount: number = 1
    let sum: number = 0
    let result: number = 0

    for (const num of arr) {
        sum += num

        if (sum % 2 === 0) {
            result += oddCount
            evenCount++
        } else {
            result += evenCount
            oddCount++
        }

        result %= MOD
    }

    return result
}
