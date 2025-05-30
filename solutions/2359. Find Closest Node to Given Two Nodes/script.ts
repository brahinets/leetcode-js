import {DirectedWeightedGraph} from "../../common/Graph"
import {arrayOf} from "../../common/array-factories"

export {closestMeetingNode}

function closestMeetingNode(edges: number[], node1: number, node2: number): number {
    const graph: DirectedWeightedGraph = buildGraph(edges)
    const distancesToFirst: number[] = getDistances(graph, node1, edges.length)
    const distancesToSecond: number[] = getDistances(graph, node2, edges.length)

    let result: number = -1
    let minDistance: number = Infinity

    for (let i: number = 0; i < edges.length; i++) {
        if (distancesToFirst[i] !== -1 && distancesToSecond[i] !== -1) {
            const maxDistance: number = Math.max(distancesToFirst[i], distancesToSecond[i])

            if (maxDistance < minDistance || (maxDistance === minDistance && i < result)) {
                result = i

                minDistance = maxDistance
            }
        }
    }

    return result
}

function buildGraph(edges: number[]): DirectedWeightedGraph {
    const graph: DirectedWeightedGraph = new DirectedWeightedGraph()

    for (let from: number = 0; from < edges.length; from++) {
        const to: number = edges[from]

        if (to !== -1) {
            graph.addEdge(from, to, 1)
        }
    }

    return graph
}

function getDistances(graph: DirectedWeightedGraph, start: number, nodesCount: number): number[] {
    const distances: number[] = arrayOf(-1, nodesCount)
    let current: number = start
    let distance: number = 0

    while (current !== -1 && distances[current] === -1) {
        distances[current] = distance

        const neighbors: Map<number, number> = graph.getNeighbours(current)
        const next: number = [...neighbors.keys()][0]

        current = next ?? -1
        distance++
    }

    return distances
}
