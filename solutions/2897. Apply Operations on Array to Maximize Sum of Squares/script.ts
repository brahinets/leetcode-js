import { arrayOfZeros } from '../../common/array-factories'

export { maxSum }

const MODULO: bigint = 1000000007n
const BIT_COUNT: number = 30

function maxSum(nums: number[], k: number): number {
    const bitCounts: number[] = arrayOfZeros(BIT_COUNT)

    for (const value of nums) {
        for (let bit: number = 0; bit < BIT_COUNT; bit++) {
            if ((value >> bit) & 1) {
                bitCounts[bit]++
            }
        }
    }

    let result: bigint = 0n

    for (let pick: number = 0; pick < k; pick++) {
        let value: number = 0

        for (let bit: number = 0; bit < BIT_COUNT; bit++) {
            if (bitCounts[bit] > 0) {
                value |= 1 << bit
                bitCounts[bit]--
            }
        }

        const bigValue: bigint = BigInt(value)

        result = (result + bigValue * bigValue) % MODULO
    }

    return Number(result)
}
