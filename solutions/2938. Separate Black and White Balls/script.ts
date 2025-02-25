export {minimumSteps}

function minimumSteps(s: string): number {
    let whitePosition: number = 0
    let totalSwaps: number = 0

    for (let currentPosition: number = 0; currentPosition < s.length; currentPosition++) {
        if (s[currentPosition] === '0') {
            totalSwaps += currentPosition - whitePosition
            whitePosition++
        }
    }

    return totalSwaps
}
