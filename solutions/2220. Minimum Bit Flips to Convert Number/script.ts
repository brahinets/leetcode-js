export {minBitFlips}

function minBitFlips(start: number, goal: number): number {
    const startBin: string = start.toString(2)
    const goalBin: string = goal.toString(2)

    const maxLength: number = Math.max(startBin.length, goalBin.length)
    const startPadded: string = startBin.padStart(maxLength, '0')
    const goalPadded: string = goalBin.padStart(maxLength, '0')

    let count: number = 0
    for (let i: number = 0; i < maxLength; i++) {
        if (startPadded[i] !== goalPadded[i]) {
            count++
        }
    }

    return count
}
