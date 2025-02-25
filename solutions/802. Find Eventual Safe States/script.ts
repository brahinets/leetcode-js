import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {eventualSafeNodes}

function eventualSafeNodes(graph: number[][]): number[] {
    const {inDegree, reverseGraph}: { inDegree: number[]; reverseGraph: number[][] } = buildReverseGraph(graph)

    return findSafeNodes(inDegree, reverseGraph, graph.length)
}

function buildReverseGraph(graph: number[][]): { inDegree: number[], reverseGraph: number[][] } {
    const inDegree: number[] = arrayOfZeros(graph.length)
    const reverseGraph: number[][] = arrayOf([], graph.length)

    for (let i = 0; i < graph.length; i++) {
        for (const node of graph[i]) {
            reverseGraph[node].push(i)
            inDegree[i]++
        }
    }

    return {inDegree, reverseGraph}
}

function findSafeNodes(inDegree: number[], reverseGraph: number[][], n: number): number[] {
    const queue: number[] = []
    const safe: boolean[] = arrayOf(false, n)

    for (let i: number = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length > 0) {
        const node: number = queue.shift()!
        safe[node] = true

        for (const neighbor of reverseGraph[node]) {
            inDegree[neighbor]--

            if (inDegree[neighbor] === 0) {
                queue.push(neighbor)
            }
        }
    }

    return collectSafeNodes(safe)
}

function collectSafeNodes(safe: boolean[]): number[] {
    const safeNodes: number[] = []

    for (let i: number = 0; i < safe.length; i++) {
        if (safe[i]) {
            safeNodes.push(i)
        }
    }

    return safeNodes
}
