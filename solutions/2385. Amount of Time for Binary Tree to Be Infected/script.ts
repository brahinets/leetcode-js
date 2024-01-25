import {TreeNode} from "../../common/TreeNode"
import {treeToGraph} from "../../common/tree-utils"

export {TreeNode, amountOfTime}

function amountOfTime(root: TreeNode, from: number): number {
    const graph: Map<number, Set<number>> = treeToGraph(root)

    let maxDistance: number = 0
    const visited: number[] = [from]
    const queue: [number, number][] = [[from, 0]]
    while (queue.length > 0) {
        const [node, distance]: [number, number] = queue.shift()!
        maxDistance = Math.max(maxDistance, distance)

        const neighbours: Set<number> = graph.get(node) ?? new Set<number>()
        for (const neighbour of neighbours) {
            if (!visited.includes(neighbour)) {
                visited.push(neighbour)
                queue.push([neighbour, distance + 1])
            }
        }
    }

    return maxDistance
}
