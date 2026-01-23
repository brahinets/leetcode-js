import {PriorityQueue} from '../../common/PriorityQueue'

export {minimumPairRemoval}

function minimumPairRemoval(nums: number[]): number {
    const length = nums.length

    if (length <= 1) {
        return 0
    }

    const values: bigint[] = nums.map((value) => BigInt(value))
    const previousIndex: number[] = Array.from({length: length}, (_, index) => index - 1)
    const nextIndex: number[] = Array.from({length: length}, (_, index) => index + 1)

    let inversions = countInversions(values)

    if (inversions === 0) {
        return 0
    }

    const queue = new PriorityQueue<[bigint, number, bigint, bigint]>((first, second) => {
        if (first[0] !== second[0]) {
            return first[0] < second[0] ? -1 : 1
        }

        return first[1] - second[1]
    })

    for (let index = 0; index < length - 1; index++) {
        const sum = values[index] + values[index + 1]
        queue.enqueue([sum, index, values[index], values[index + 1]])
    }

    let operations = 0

    while (inversions > 0 && !queue.isEmpty()) {
        const [pairSum, left, expectedLeft, expectedRight] = queue.dequeue()!
        const right = nextIndex[left]

        const isInvalid = right >= length
            || values[left] !== expectedLeft
            || values[right] !== expectedRight

        if (isInvalid) {
            continue
        }

        operations++

        const previous = previousIndex[left]
        const nextNext = nextIndex[right]

        if (previous >= 0) {
            if (values[previous] > values[left]) {
                inversions--
            }

            if (values[previous] > pairSum) {
                inversions++
            }
        }

        if (values[right] < values[left]) {
            inversions--
        }

        if (nextNext < length) {
            if (values[nextNext] < values[right]) {
                inversions--
            }

            if (values[nextNext] < pairSum) {
                inversions++
            }
        }

        values[left] = pairSum
        nextIndex[left] = nextNext
        nextIndex[right] = length

        if (nextNext < length) {
            previousIndex[nextNext] = left

            const newSum = pairSum + values[nextNext]
            queue.enqueue([newSum, left, pairSum, values[nextNext]])
        }

        if (previous >= 0) {
            const newSum = values[previous] + pairSum
            queue.enqueue([newSum, previous, values[previous], pairSum])
        }
    }

    return operations
}

function countInversions(values: bigint[]): number {
    let inversions = 0

    for (let index = 0; index < values.length - 1; index++) {
        if (values[index] > values[index + 1]) {
            inversions++
        }
    }

    return inversions
}
