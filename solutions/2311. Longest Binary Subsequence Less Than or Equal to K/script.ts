export {longestSubsequence}

function longestSubsequence(binary: string, maxValue: number): number {
    let count: number = 0
    let currentValue: number = 0

    const maxBits: number = Math.floor(Math.log2(maxValue)) + 1
    for (let i: number = 0; i < binary.length; i++) {
        const char: string = binary[binary.length - 1 - i]

        if (char == '0') {
            count++
        } else if (i < maxBits && currentValue + (1 << i) <= maxValue) {
            currentValue += 1 << i
            count++
        }
    }

    return count
}
