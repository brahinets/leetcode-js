export {numEquivDominoPairs}

function numEquivDominoPairs(dominoes: number[][]): number {
    let count: number = 0

    const counts: Map<string, number> = new Map<string, number>()
    for (const domino of dominoes) {
        const key: string = domino[0] < domino[1] ? `${domino[0]}-${domino[1]}` : `${domino[1]}-${domino[0]}`
        const value: number | undefined = counts.get(key)

        if (value !== undefined) {
            count += value
            counts.set(key, value + 1)
        } else {
            counts.set(key, 1)
        }
    }

    return count
}
