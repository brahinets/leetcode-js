import {arrayOf} from "../../common/array-factories"

export {mostProfitablePath}

function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const tree: number[][] = arrayOf([], amount.length)
    const bobPath: number[] = arrayOf(-1, amount.length)
    const visited: boolean[] = arrayOf(false, amount.length)
    let maxIncome = Number.MIN_SAFE_INTEGER

    for (const [u, v] of edges) {
        tree[u].push(v)
        tree[v].push(u)
    }

    findBobPath(tree, bob, 0, bobPath, visited)

    visited.fill(false)

    const queue: [number, number, number][] = []
    let front: number = 0
    let back: number = 0
    queue[back++] = [0, 0, 0];
    visited[0] = true

    while (front < back) {
        const [node, time, income]: [number, number, number] = queue[front++]
        let newIncome: number = income
        const bobTime: number = bobPath[node]

        if (bobTime === -1 || time < bobTime) {
            newIncome += amount[node];
        } else if (time === bobTime) {
            newIncome += Math.floor(amount[node] / 2);
        }

        if (tree[node].length === 1 && node !== 0) {
            maxIncome = Math.max(maxIncome, newIncome)
        }

        for (const neighbor of tree[node]) {
            if (!visited[neighbor]) {
                queue[back++] = [neighbor, time + 1, newIncome]
                visited[neighbor] = true
            }
        }
    }

    return maxIncome
}

function findBobPath(
    tree: number[][],
    node: number,
    time: number,
    bobPath: number[],
    visited: boolean[]
): boolean {
    bobPath[node] = time
    visited[node] = true

    if (node === 0) {
        return true
    }

    for (const neighbor of tree[node]) {
        if (!visited[neighbor] && findBobPath(tree, neighbor, time + 1, bobPath, visited)) {
            return true
        }
    }

    bobPath[node] = -1
    return false
}
