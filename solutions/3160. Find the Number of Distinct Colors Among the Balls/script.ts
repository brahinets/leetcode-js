import {arrayOfZeros} from "../../common/array-factories"

export {queryResults}

function queryResults(limit: number, queries: number[][]): number[] {
    const colorMap: Map<number, number> = new Map<number, number>()

    let result: number[] = []
    let ballArray: number[] = arrayOfZeros(limit + 1)

    for (let i: number = 0; i < queries.length; i++) {
        let ball: number = queries[i][0]
        let color: number = queries[i][1]

        if (ballArray[ball] != 0) {
            let prevColor: number = ballArray[ball]
            colorMap.set(prevColor, colorMap.get(prevColor)! - 1)

            if (colorMap.get(prevColor) == 0) {
                colorMap.delete(prevColor)
            }
        }
        ballArray[ball] = color

        colorMap.set(color, (colorMap.get(color) ?? 0) + 1)
        result[i] = colorMap.size
    }
    return result
}
