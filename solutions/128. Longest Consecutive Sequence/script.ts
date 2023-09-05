export {longestConsecutive}

function longestConsecutive(nums: number[]): number {
    const numbers: number[] = nums.sort((a: number, b: number): number => a - b)

    let maxSequenceLength: number = 0
    let lastSequenceLength: number = 0
    let prev: number | undefined = undefined
    for (let i: number = 0; i < numbers.length; i++) {
        if (prev === undefined || prev + 1 === numbers[i]) {
            prev = numbers[i]
            lastSequenceLength += 1
        } else {
            maxSequenceLength = Math.max(lastSequenceLength, maxSequenceLength)
            lastSequenceLength = 1
        }
    }

    return Math.max(lastSequenceLength, maxSequenceLength)
}
