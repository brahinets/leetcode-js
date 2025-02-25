import {arrayOfZeros} from "../../common/array-factories"

export {findChampion}

function findChampion(n: number, edges: number[][]): number {
    const inDegree: number[] = arrayOfZeros(n)

    for (const [, to] of edges) {
        inDegree[to]++
    }

    const zeroInDegreeNodes: number[] = []
    for (let i: number = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            zeroInDegreeNodes.push(i)
        }
    }

    return zeroInDegreeNodes.length === 1 ? zeroInDegreeNodes[0] : -1
}
