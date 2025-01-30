import {DisjointSetUnion} from "../../common/DisjointSetUnion"

export {magnificentSets}

function magnificentSets(n: number, edges: number[][]): number {
    const dsu: DisjointSetUnion = new DisjointSetUnion(n + 1)
    const graph: Map<number, number[]> = new Map<number, number[]>()

    for (let i: number = 1; i <= n; i++) {
        graph.set(i, [])
    }
    for (const [u, v] of edges) {
        graph.get(u)!.push(v)
        graph.get(v)!.push(u)
        dsu.union(u, v)
    }

    const components: Map<number, number[]> = new Map<number, number[]>()
    for (let i: number = 1; i <= n; i++) {
        const root: number = dsu.find(i)

        if (!components.has(root)) {
            components.set(root, [])
        }
        components.get(root)!.push(i)
    }

    let maxGroups: number = 0
    for (const nodes of Array.from(components.values())) {
        let maxGroupsInComponent = 0

        for (const startNode of nodes) {
            const groups: number = bfsCheckBipartiteAndLongestPath(startNode, graph)

            if (groups === null) {
                return -1
            }
            maxGroupsInComponent = Math.max(maxGroupsInComponent, groups)
        }

        maxGroups += maxGroupsInComponent
    }

    return maxGroups
}

function bfsCheckBipartiteAndLongestPath(start: number, graph: Map<number, number[]>): number | null {
    const levels: Map<number, number> = new Map<number, number>([[start, 1]])
    const queue: number[] = [start]

    while (queue.length > 0) {
        const node: number = queue.shift()!
        const level: number = levels.get(node)!

        for (const neighbor of graph.get(node)!) {
            if (!levels.has(neighbor)) {
                levels.set(neighbor, level + 1)
                queue.push(neighbor)
            } else if (Math.abs(levels.get(neighbor)! - level) !== 1) {
                return null
            }
        }
    }

    return Math.max(...Array.from(levels.values()))
}
