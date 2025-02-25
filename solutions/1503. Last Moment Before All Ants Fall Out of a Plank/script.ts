export {getLastMoment}

function getLastMoment(n: number, left: number[], right: number[]): number {
    let lastMoment: number = 0

    for (const ant of left) {
        lastMoment = Math.max(lastMoment, ant)
    }

    for (const ant of right) {
        lastMoment = Math.max(lastMoment, n - ant)
    }

    return lastMoment
}
