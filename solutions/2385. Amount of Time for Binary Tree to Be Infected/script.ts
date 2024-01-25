import {TreeNode} from "../../common/TreeNode"
import {treeToGraph} from "../../common/tree-utils"

export {TreeNode, amountOfTime}

function amountOfTime(root: TreeNode, from: number): number {
    const graph: Map<number, Set<number>> = treeToGraph(root)

    let maxDistance: number = 0
    for (const node of graph.keys()) {
        if (node === from) {
            continue
        }

        const distance: number = dfs(graph, from, node, [from])
        if (distance > maxDistance) {
            maxDistance = distance
        }
    }

    return maxDistance
}

function dfs(graph: Map<number, Set<number>>, from: number, to: number, visited: number[]): number {
    const neighbours: Set<number> | undefined = graph.get(from)

    if (!neighbours) {
        return -1
    }

    if (neighbours.has(to)) {
        return 1
    }

    for (const neighbour of neighbours) {
        if (!visited.includes(neighbour)) {
            visited.push(neighbour)
            const res: number = dfs(graph, neighbour, to, visited)
            if (res > 0) {
                return res + 1
            }
        }
    }

    return -1
}
