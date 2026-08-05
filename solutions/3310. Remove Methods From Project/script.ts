import { DirectedUnweightedGraph } from "../../common/Graph"
import { directedUnweightedGraphFromEdges } from "../../common/graph-factories"
import { arrayOf } from "../../common/array-factories"

export { remainingMethods }

function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
    const graph: DirectedUnweightedGraph = directedUnweightedGraphFromEdges(invocations)
    const suspiciousMethods: boolean[] = findSuspiciousMethods(graph, k, n)

    if (isRemovalBlocked(invocations, suspiciousMethods)) {
        return allMethods(n)
    }

    return remainingNonSuspiciousMethods(suspiciousMethods, n)
}

function findSuspiciousMethods(graph: DirectedUnweightedGraph, k: number, n: number): boolean[] {
    const suspiciousMethods: boolean[] = arrayOf(false, n)
    suspiciousMethods[k] = true

    const queue: number[] = [k]
    for (let head: number = 0; head < queue.length; head++) {
        const current: number = queue[head]
        for (const neighbor of graph.getNeighbours(current).keys()) {
            if (!suspiciousMethods[neighbor]) {
                suspiciousMethods[neighbor] = true

                queue.push(neighbor)
            }
        }
    }

    return suspiciousMethods
}

function isRemovalBlocked(invocations: number[][], suspiciousMethods: boolean[]): boolean {
    for (const [caller, callee] of invocations) {
        if (suspiciousMethods[callee] && !suspiciousMethods[caller]) {
            return true
        }
    }

    return false
}

function allMethods(n: number): number[] {
    const methods: number[] = []
    for (let method: number = 0; method < n; method++) {
        methods.push(method)
    }

    return methods
}

function remainingNonSuspiciousMethods(suspiciousMethods: boolean[], n: number): number[] {
    const remaining: number[] = []
    for (let method: number = 0; method < n; method++) {
        if (!suspiciousMethods[method]) {
            remaining.push(method)
        }
    }

    return remaining
}
