import {DirectedUnweightedGraph} from "../../common/Graph"

export {numBusesToDestination}

function numBusesToDestination(routes: number[][], source: number, target: number): number {
    if(source === target) {
        return 0
    }

    const graph: DirectedUnweightedGraph = buildRoutes(routes)

    let toVisit: number[] = [...graph.getNeighbours(source).keys()]
    let visited: number[] = []

    let count: number = 1
    while (toVisit.length > 0) {
        let toVisitNext: number[] = []

        for (const route of toVisit) {
            if (route === target) {
                return count
            }

            for (const stop of graph.getNeighbours(route).keys()) {
                if (stop === target) {
                    return count
                }

                for (const next of graph.getNeighbours(stop).keys()) {
                    if (next === target) {
                        return count
                    }

                    if (!visited.includes(next)) {
                        visited.push(next)
                        toVisitNext.push(next)
                    }
                }
            }
        }

        toVisit = toVisitNext
        toVisitNext = []
        count++
    }

    return -1
}

function buildRoutes(buses: number[][]): DirectedUnweightedGraph {
    let graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()

    for (const bus of buses) {
        for (let i: number = 1; i < bus.length; i++) {
            graph.addEdge(bus[i - 1], bus[i])
        }

        if (bus.length > 1) {
            graph.addEdge(bus[bus.length - 1], bus[0])
        }
    }

    return graph
}
