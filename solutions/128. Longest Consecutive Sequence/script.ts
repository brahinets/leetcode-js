export {longestConsecutive}

function longestConsecutive(nums: number[]): number {
    const numbers: number[] = [...new Set<number>(nums)]
        .toSorted((a: number, b: number): number => a - b)

    let maxSequenceLength: number = 0
    let lastSequenceLength: number = 0
    let prev: number | undefined = undefined
    for (let i: number = 0; i < numbers.length; i++) {
        if (prev === undefined || prev + 1 === numbers[i]) {
            lastSequenceLength += 1
        } else {
            maxSequenceLength = Math.max(lastSequenceLength, maxSequenceLength)
            lastSequenceLength = 1
        }
        prev = numbers[i]
    }

    return Math.max(lastSequenceLength, maxSequenceLength)
}
