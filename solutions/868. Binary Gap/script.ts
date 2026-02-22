export { binaryGap }

function binaryGap(n: number): number {
    let maxGap: number = 0
    let lastPosition: number = -1
    let position: number = 0

    while (n > 0) {
        if (n & 1) {
            if (lastPosition !== -1) {
                maxGap = Math.max(maxGap, position - lastPosition)
            }
            lastPosition = position
        }
        n >>= 1
        position++
    }

    return maxGap
}
