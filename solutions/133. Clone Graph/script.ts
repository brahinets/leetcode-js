export {cloneGraph, _Node}

function cloneGraph(node: _Node | null): _Node | null {
    if (node === null) {
        return null
    }

    const cloned: Map<_Node, _Node> = new Map<_Node, _Node>()

    return dfs(node, cloned)
}

function dfs(original: _Node, cloned: Map<_Node, _Node>): _Node {
    if (cloned.has(original)) {
        return cloned.get(original)!
    }

    const copy: _Node = new _Node(original.val)
    cloned.set(original, copy)

    for (const neighbor of original.neighbors) {
        copy.neighbors.push(dfs(neighbor, cloned))
    }

    return copy
}

class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

