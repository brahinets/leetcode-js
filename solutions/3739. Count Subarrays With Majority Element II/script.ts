import { arrayOfZeros } from '../../common/array-factories'

export { countMajoritySubarrays }

function countMajoritySubarrays(numbers: number[], target: number): number {
    const n: number = numbers.length
    const offset: number = n
    const bitSize: number = 2 * n + 2
    const bit: number[] = arrayOfZeros(bitSize + 1)

    let result: number = 0
    let prefixSum: number = 0

    updateBit(bit, prefixSum + offset + 1, bitSize)

    for (let i: number = 0; i < n; i++) {
        prefixSum += numbers[i] === target ? 1 : -1

        const queryIndex: number = prefixSum + offset

        if (queryIndex >= 1) {
            result += queryBit(bit, queryIndex)
        }

        updateBit(bit, prefixSum + offset + 1, bitSize)
    }

    return result
}

function updateBit(bit: number[], index: number, size: number): void {
    for (let i: number = index; i <= size; i += i & (-i)) {
        bit[i]++
    }
}

function queryBit(bit: number[], index: number): number {
    let sum: number = 0

    for (let i: number = index; i > 0; i -= i & (-i)) {
        sum += bit[i]
    }

    return sum
}
