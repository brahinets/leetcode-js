export {eliminateMaximum}

function eliminateMaximum(dist: number[], speed: number[]): number {
    const arrivalTimes: number[] = dist
        .map((distance, i) => Math.ceil(distance / speed[i]))
        .sort((a, b) => a - b)

    let terminated = 0
    for (let i = 0; i < arrivalTimes.length; i++) {
        if (arrivalTimes[i] > i) {
            terminated++
        } else {
            break
        }
    }

    return terminated
}
