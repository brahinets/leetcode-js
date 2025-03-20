import {arrayOf} from "../../common/array-factories"

export {minimumCost}

// TODO Use Graph for simplicity
function minimumCost(n: number, edges: number[][], queries: number[][]): number[] {
    const adjList: Map<number, [number, number][]> = new Map<number, [number, number][]>()
    for (let i: number = 0; i < n; i++) {
        adjList.set(i, [])
    }

    for (const [u, v, w] of edges) {
        adjList.get(u)!.push([v, w])
        adjList.get(v)!.push([u, w])
    }

    const visited: boolean[] = arrayOf(false, n)
    const components: number[] = arrayOf(-1, n)
    const componentCost: number[] = []

    let componentId: number = 0
    for (let node: number = 0; node < n; node++) {
        if (!visited[node]) {
            componentCost.push(getComponentCost(node, adjList, visited, components, componentId))
            componentId++
        }
    }

    return queries.map(([start, end]: number[]): number =>
        components[start] === components[end] ? componentCost[components[start]] : -1
    )
}

function getComponentCost(
    node: number,
    adjList: Map<number, [number, number][]>,
    visited: boolean[],
    components: number[],
    componentId: number
): number {
    let currentCost: number = Number.MAX_SAFE_INTEGER

    visited[node] = true
    components[node] = componentId

    for (const [neighbor, weight] of adjList.get(node)!) {
        currentCost &= weight

        if (!visited[neighbor]) {
            currentCost &= getComponentCost(neighbor, adjList, visited, components, componentId)
        }
    }

    return currentCost
}
