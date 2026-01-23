import {PriorityQueue} from '../../common/PriorityQueue'

export {minimumPairRemoval}

function minimumPairRemoval(nums: number[]): number {
    const n = nums.length
    if (n <= 1) return 0

    const values: bigint[] = nums.map(x => BigInt(x))
    const prev: number[] = Array.from({length: n}, (_, i) => i - 1)
    const next: number[] = Array.from({length: n}, (_, i) => i + 1)

    let inversions = 0
    for (let i = 0; i < n - 1; i++) {
        if (values[i] > values[i + 1]) {
            inversions++
        }
    }

    if (inversions === 0) return 0

    const pq = new PriorityQueue<[bigint, number, bigint, bigint]>((a, b) => {
        if (a[0] !== b[0]) return a[0] < b[0] ? -1 : 1
        return a[1] - b[1]
    })

    for (let i = 0; i < n - 1; i++) {
        const sum = values[i] + values[i + 1]
        pq.enqueue([sum, i, values[i], values[i + 1]])
    }

    let operations = 0

    while (inversions > 0 && !pq.isEmpty()) {
        const [pairSum, i, expectedLeft, expectedRight] = pq.dequeue()!
        const j = next[i]

        if (j >= n || values[i] !== expectedLeft || values[j] !== expectedRight) {
            continue
        }

        operations++

        const prevIdx = prev[i]
        const nextNextIdx = next[j]

        if (prevIdx >= 0) {
            if (values[prevIdx] > values[i]) inversions--
            if (values[prevIdx] > pairSum) inversions++
        }

        if (values[j] < values[i]) inversions--

        if (nextNextIdx < n) {
            if (values[nextNextIdx] < values[j]) inversions--
            if (values[nextNextIdx] < pairSum) inversions++
        }

        values[i] = pairSum
        next[i] = nextNextIdx

        if (nextNextIdx < n) {
            prev[nextNextIdx] = i
            const newSum = pairSum + values[nextNextIdx]
            pq.enqueue([newSum, i, pairSum, values[nextNextIdx]])
        }

        if (prevIdx >= 0) {
            const newSum = values[prevIdx] + pairSum
            pq.enqueue([newSum, prevIdx, values[prevIdx], pairSum])
        }
    }

    return operations
}
