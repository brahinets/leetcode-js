import {matrixOfZeros} from "../../common/array-factories"

export {maxPartitionsAfterOperations}

function maxPartitionsAfterOperations(s: string, k: number): number {
    const n: number = s.length
    const left: number[][] = matrixOfZeros(n, 3)
    const right: number[][] = matrixOfZeros(n, 3)

    calculateSegments(s, k, left, true)
    calculateSegments(s, k, right, false)

    return findMaxPartitions(s, k, left, right)
}

function calculateSegments(s: string, k: number, segments: number[][], isLeft: boolean): void {
    const n: number = s.length
    let num: number = 0
    let mask: number = 0
    let count: number = 0

    const start: number = isLeft ? 0 : n - 1
    const end: number = isLeft ? n - 1 : 0
    const step: number = isLeft ? 1 : -1

    for (let i: number = start; isLeft ? i < end : i > end; i += step) {
        const binary: number = 1 << (s.charCodeAt(i) - 97)

        if (!(mask & binary)) {
            count++

            if (count <= k) {
                mask |= binary
            } else {
                num++
                mask = binary
                count = 1
            }
        }

        const index: number = isLeft ? i + 1 : i - 1
        segments[index][0] = num
        segments[index][1] = mask
        segments[index][2] = count
    }
}

function findMaxPartitions(s: string, k: number, left: number[][], right: number[][]): number {
    const n: number = s.length
    let max: number = 0

    for (let i: number = 0; i < n; i++) {
        let segments: number = left[i][0] + right[i][0] + 2
        let totalMask: number = left[i][1] | right[i][1]
        let totalCount: number = countBits(totalMask)

        if (left[i][2] === k && right[i][2] === k && totalCount < 26) {
            segments++
        } else if (Math.min(totalCount + 1, 26) <= k) {
            segments--
        }

        max = Math.max(max, segments)
    }

    return max
}

function countBits(mask: number): number {
    let count: number = 0

    while (mask) {
        mask &= (mask - 1)
        count++
    }

    return count
}
