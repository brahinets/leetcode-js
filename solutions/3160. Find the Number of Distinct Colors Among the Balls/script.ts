export {queryResults}

function queryResults(limit: number, queries: number[][]): number[] {
    let result = []
    const colorMap: Map<number, number> = new Map<number, number>()
    const ballMap: Map<number, number> = new Map<number, number>()

    for (const [ball, color] of queries) {
        if (ballMap.has(ball)) {
            const prevColor: number = ballMap.get(ball)!
            colorMap.set(prevColor, colorMap.get(prevColor)! - 1)

            if (colorMap.get(prevColor)! == 0) {
                colorMap.delete(prevColor)
            }
        }
        ballMap.set(ball, color)
        colorMap.set(color, (colorMap.get(color) ?? 0) + 1)

        result.push(colorMap.size)
    }

    return result
}
