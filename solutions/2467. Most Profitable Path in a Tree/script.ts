import {arrayOf} from "../../common/array-factories"

export {mostProfitablePath}

function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const tree: number[][] = arrayOf([], amount.length)
    const bobPath: Map<number, number> = new Map<number, number>()
    const visited: boolean[] = arrayOf(false, amount.length)
    let maxIncome: number = Number.MIN_SAFE_INTEGER
    const queue: [number, number, number][] = [[0, 0, 0]];
    for (const [u, v] of edges) {
        tree[u].push(v)
        tree[v].push(u)
    }

    findBobPath(tree, bob, 0, bobPath, visited)

    visited.fill(false)

    while (queue.length) {
        const [node, time, income]: [number, number, number] = queue.shift()!
        let newIncome: number = income
        const bobTime: number | undefined = bobPath.get(node)

        if (bobTime === undefined || time < bobTime) {
            newIncome += amount[node];
        } else if (time === bobTime) {
            newIncome += Math.floor(amount[node] / 2);
        }

        if (tree[node].length === 1 && node !== 0) {
            maxIncome = Math.max(maxIncome, newIncome)
        }

        for (const neighbor of tree[node]) {
            if (!visited[neighbor]) {
                queue.push([neighbor, time + 1, newIncome])
            }
        }

        visited[node] = true
    }

    return maxIncome
}

function findBobPath(
    tree: number[][],
    node: number,
    time: number,
    bobPath: Map<number, number>,
    visited: boolean[]
): boolean {
    bobPath.set(node, time)
    visited[node] = true

    if (node === 0) {
        return true
    }

    for (const neighbor of tree[node]) {
        if (!visited[neighbor] && findBobPath(tree, neighbor, time + 1, bobPath, visited)) {
            return true
        }
    }

    bobPath.delete(node)
    return false
}
