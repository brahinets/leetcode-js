import {arrayOfZeros} from "../../common/array-factories"

export {maximumImportance}

function maximumImportance(n: number, roads: number[][]): number {
    const degrees: number[] = collectDegrees(n, roads)

    let value: number = 1
    let total: number = 0
    for (const degree of degrees) {
        total += (value * degree)
        value++
    }

    return total
}

function collectDegrees(n: number, roads: number[][]): number[] {
    const degree: number[] = arrayOfZeros(n)

    for (const road of roads) {
        degree[road[0]]++
        degree[road[1]]++
    }

    return degree.sort((a, b) => a - b)
}
