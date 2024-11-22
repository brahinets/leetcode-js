export {maxEqualRowsAfterFlips}

function maxEqualRowsAfterFlips(matrix: number[][]): number {
    const map: Map<string, number> = new Map<string, number>()
    let result: number = 0

    for (const row of matrix) {
        let key: string = row[0].toString()
        let flipKey: string = (1 - row[0]).toString()

        for (let i: number = 1; i < row.length; i++) {
            key += row[i]
            flipKey += 1 - row[i]
        }

        map.set(key, (map.get(key) || 0) + 1)
        map.set(flipKey, (map.get(flipKey) || 0) + 1)

        result = Math.max(result, map.get(key)!, map.get(flipKey)!)
    }

    return result
}
