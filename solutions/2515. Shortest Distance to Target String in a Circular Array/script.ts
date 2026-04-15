export { closestTarget }

function closestTarget(words: string[], target: string, startIndex: number): number {
    const length: number = words.length
    let minimumDistance: number = -1

    for (let index: number = 0; index < length; index++) {
        if (words[index] !== target) {
            continue
        }

        const absoluteDistance: number = Math.abs(index - startIndex)
        const circularDistance: number = Math.min(absoluteDistance, length - absoluteDistance)

        if (minimumDistance === -1 || circularDistance < minimumDistance) {
            minimumDistance = circularDistance
        }

    }

    return minimumDistance
}
