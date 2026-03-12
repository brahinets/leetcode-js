import { arrayOfZeros } from "../../common/array-factories"

export { maxStability }

function maxStability(n: number, edges: number[][], k: number): number {
    let lowerBound: number = 1
    let upperBound: number = 200000
    let result: number = -1

    while (lowerBound <= upperBound) {
        const middle: number = (lowerBound + upperBound) >> 1

        if (canAchieve(n, edges, k, middle)) {
            result = middle

            lowerBound = middle + 1
        } else {
            upperBound = middle - 1
        }
    }

    return result
}

function canAchieve(n: number, edges: number[][], k: number, middle: number): boolean {
    const parent: number[] = Array.from({ length: n }, (_, index) => index)
    const rank: number[] = arrayOfZeros(n)

    for (const [source, target, strength, isMandatory] of edges) {
        if (isMandatory === 1) {
            if (strength < middle) {
                return false
            }

            if (!union(parent, rank, source, target)) {
                return false
            }
        }
    }

    for (const [source, target, strength, isMandatory] of edges) {
        if (isMandatory === 0 && strength >= middle) {
            union(parent, rank, source, target)
        }
    }

    let upgrades: number = 0
    for (const [source, target, strength, isMandatory] of edges) {
        if (isMandatory === 0 && strength < middle && strength * 2 >= middle) {
            if (union(parent, rank, source, target)) {
                upgrades++
            }
        }
    }

    if (upgrades > k) {
        return false
    }

    const root: number = find(parent, 0)
    for (let node: number = 1; node < n; node++) {
        if (find(parent, node) !== root) {
            return false
        }
    }

    return true
}

function find(parent: number[], node: number): number {
    while (parent[node] !== node) {
        parent[node] = parent[parent[node]]

        node = parent[node]
    }

    return node
}

function union(parent: number[], rank: number[], nodeX: number, nodeY: number): boolean {
    const rootX: number = find(parent, nodeX)
    const rootY: number = find(parent, nodeY)
    if (rootX === rootY) {
        return false
    }

    if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY
    } else if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX
    } else {
        parent[rootY] = rootX; rank[rootX]++
    }

    return true
}
