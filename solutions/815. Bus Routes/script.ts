import {DirectedUnweightedGraph} from "../../common/Graph"

export {numBusesToDestination}

function numBusesToDestination(routes: number[][], source: number, target: number): number {
    if (source === target) {
        return 0
    }

    const graph: DirectedUnweightedGraph = buildRoutes(routes)

    const queue: number[] = [...graph.getNeighbours(source).keys()]
    const visitedRoutes: Set<number> = new Set<number>([...graph.getNeighbours(source).keys()])

    let busCount: number = 1
    while (queue.length > 0) {
        const size: number = queue.length

        for (let i: number = 0; i < size; i++) {
            const route: number = queue.shift()!

            for (const stop of routes[route]) {
                if (stop === target) {
                    return busCount
                }

                for (const nextRoute of graph.getNeighbours(stop).keys()) {
                    if (!visitedRoutes.has(nextRoute)) {
                        visitedRoutes.add(nextRoute)
                        queue.push(nextRoute)
                    }
                }
            }
        }

        busCount++
    }

    return -1
}

function buildRoutes(buses: number[][]): DirectedUnweightedGraph {
    const graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()

    for (let bus = 0; bus < buses.length; bus++) {
        for (const stop of buses[bus]) {
            graph.addEdge(stop, bus)
        }
    }

    return graph
}
