import {DirectedUnweightedGraph} from "../../common/Graph"

export {numBusesToDestination}

function numBusesToDestination(routes: number[][], source: number, target: number): number {
    if (source === target) {
        return 0
    }

    const graph: DirectedUnweightedGraph = buildRoutes(routes)

    const queue: [number, number][] = [[source, 0]]
    const visitedStops: Set<number> = new Set<number>([source])

    while (queue.length > 0) {
        const [currentStop, busesTaken]: [number, number] = queue.shift()!

        for (const [nextStop] of graph.getNeighbours(currentStop)) {
            if (nextStop === target) {
                return busesTaken + 1
            }

            if (!visitedStops.has(nextStop)) {
                visitedStops.add(nextStop)
                queue.push([nextStop, busesTaken + 1])
            }
        }
    }

    return -1
}

function buildRoutes(buses: number[][]): DirectedUnweightedGraph {
    const graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()

    for (const bus of buses) {
        for (let i: number = 0; i < bus.length; i++) {
            for (let j: number = i + 1; j < bus.length; j++) {
                graph.addEdge(bus[i], bus[j])
                graph.addEdge(bus[j], bus[i])
            }
        }
    }

    return graph
}
