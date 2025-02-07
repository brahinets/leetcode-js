export {queryResults}

function queryResults(limit: number, queries: number[][]): number[] {
    let result = []
    const colorMap: Map<number, number> = new Map<number, number>()
    const ballMap: Map<number, number> = new Map<number, number>()

    for (let i: number = 0; i < queries.length; i++) {
        let ball: number = queries[i][0]
        let color: number = queries[i][1]

        if (ballMap.has(ball)) {
            let prevColor: number = ballMap.get(ball)!
            colorMap.set(prevColor, colorMap.get(prevColor)! - 1)

            if (colorMap.get(prevColor)! == 0) {
                colorMap.delete(prevColor)
            }
        }
        ballMap.set(ball, color)
        colorMap.set(color, (colorMap.get(color) ?? 0) + 1)

        result[i] = colorMap.size
    }

    return result
}
