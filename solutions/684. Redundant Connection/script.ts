import {DisjointSetUnion} from "../../common/DisjointSetUnion"

export {findRedundantConnection}

function findRedundantConnection(edges: number[][]): number[] {
    const dsu: DisjointSetUnion = new DisjointSetUnion(edges.length + 1)

    for (const [u, v] of edges) {
        if (!dsu.union(u, v)) {
            return [u, v]
        }
    }

    return []
}
