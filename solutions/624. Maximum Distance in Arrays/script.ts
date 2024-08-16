export {maxDistance}

function maxDistance(arrays: number[][]): number {
    let min: number = arrays[0][0]
    let max: number = arrays[0][arrays[0].length - 1]

    let result: number = 0

    for (let i: number = 1; i < arrays.length; i++) {
        result = Math.max(result, Math.abs(arrays[i][arrays[i].length - 1] - min))
        result = Math.max(result, Math.abs(max - arrays[i][0]))

        min = Math.min(min, arrays[i][0])
        max = Math.max(max, arrays[i][arrays[i].length - 1])
    }

    return result
}
