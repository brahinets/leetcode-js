export { xorAfterQueries }

const MODULUS: number = 1_000_000_007

function xorAfterQueries(nums: number[], queries: number[][]): number {
    const current: number[] = [...nums]

    for (const [left, right, step, multiplier] of queries) {
        for (let index = left; index <= right; index += step) {
            current[index] = (current[index] * multiplier) % MODULUS
        }
    }

    let result: number = 0
    for (const value of current) {
        result ^= value
    }

    return result
}
