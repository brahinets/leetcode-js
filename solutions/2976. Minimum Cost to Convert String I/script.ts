import {matrixOf} from "../../common/array-factories"

export {minimumCost}

function minimumCost(
    source: string,
    target: string,
    original: string[],
    changed: string[],
    cost: number[]
): number {
    let totalCost: number = 0

    const minCost: number[][] = prepareCosts(original, changed, cost)
    for (let i = 0; i < source.length; i++) {
        if (source[i] === target[i]) {
            continue
        }
        const sourceChar: number = source[i].charCodeAt(0) - 'a'.charCodeAt(0)
        const targetChar: number = target[i].charCodeAt(0) - 'a'.charCodeAt(0)

        if (minCost[sourceChar][targetChar] >= Number.MAX_SAFE_INTEGER) {
            return -1
        }
        totalCost += minCost[sourceChar][targetChar]
    }

    return totalCost
}

function prepareCosts(original: string[], changed: string[], cost: number[]): number[][] {
    const minCost: number[][] = matrixOf(Number.MAX_SAFE_INTEGER, 26, 26)

    for (let i = 0; i < original.length; i++) {
        const startChar: number = original[i].charCodeAt(0) - 'a'.charCodeAt(0)
        const endChar: number = changed[i].charCodeAt(0) - 'a'.charCodeAt(0)
        minCost[startChar][endChar] = Math.min(minCost[startChar][endChar], cost[i])
    }

    for (let k: number = 0; k < 26; k++) {
        for (let i: number = 0; i < 26; i++) {
            for (let j: number = 0; j < 26; j++) {
                minCost[i][j] = Math.min(minCost[i][j], minCost[i][k] + minCost[k][j])
            }
        }
    }

    return minCost
}
