import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {maxTargetNodes}

function maxTargetNodes(edges1: number[][], edges2: number[][]): number[] {
    const color1: number[] = arrayOfZeros(edges1.length + 1)
    const color2: number[] = arrayOfZeros(edges2.length + 1)
    const [even1, odd1] = build(edges1, color1)
    const [even2, odd2] = build(edges2, color2)

    const result: number[] = arrayOfZeros(edges1.length + 1)
    for (let i: number = 0; i < edges1.length + 1; i++) {
        if (color1[i] === 0) {
            result[i] = even1 + Math.max(even2, odd2)
        } else {
            result[i] = odd1 + Math.max(even2, odd2)
        }
    }

    return result
}

function build(edges: number[][], color: number[]): [number, number] {
    const children: number[][] = arrayOf([], edges.length + 1)

    for (const [u, v] of edges) {
        children[u].push(v)
        children[v].push(u)
    }

    return dfs(0, -1, 0, children, color)
}

function dfs(node: number, parent: number, depth: number, children: number[][], color: number[]): [number, number] {
    color[node] = depth % 2

    let even: number = depth % 2 === 0 ? 1 : 0
    let odd: number = depth % 2 === 1 ? 1 : 0
    for (const child of children[node]) {
        if (child === parent) {
            continue
        }

        const [e, o]: [number, number] = dfs(child, node, depth + 1, children, color)

        even += e
        odd += o
    }
    return [even, odd]
}
