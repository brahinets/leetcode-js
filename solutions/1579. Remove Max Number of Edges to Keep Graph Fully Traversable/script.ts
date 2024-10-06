import {arrayOfZeros} from "../../common/array-factories"

export {maxNumEdgesToRemove, DisjointSetUnion}

const CAN_BE_TRAVERSED_BY_ALICE: number = 1
const CAN_BE_TRAVERSED_BY_BOB: number = 2
const CAN_BE_TRAVERSED_BY_BOTH: number = 3

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
    const alice: DisjointSetUnion = new DisjointSetUnion(n + 1)
    const bob: DisjointSetUnion = new DisjointSetUnion(n + 1)
    let removeCount: number = 0

    for (const [type, u, v] of edges) {
        if (type === CAN_BE_TRAVERSED_BY_BOTH) {
            const aliceUnion: boolean = alice.union(u, v)
            const bobUnion: boolean = bob.union(u, v)
            if (!aliceUnion && !bobUnion) {
                removeCount++
            }
        }
    }
    for (const [type, u, v] of edges) {
        if (type === CAN_BE_TRAVERSED_BY_ALICE) {
            if (!alice.union(u, v)) {
                removeCount++
            }
        } else if (type === CAN_BE_TRAVERSED_BY_BOB) {
            if (!bob.union(u, v)) {
                removeCount++
            }
        }
    }

    const aliceComponents: Set<number> = new Set<number>()
    const bobComponents: Set<number> = new Set<number>()
    for (let i: number = 1; i <= n; i++) {
        aliceComponents.add(alice.find(i))
        bobComponents.add(bob.find(i))
    }

    if (aliceComponents.size > 1 || bobComponents.size > 1) {
        return -1
    }

    return removeCount
}

class DisjointSetUnion {
    parent: number[]
    rank: number[]

    constructor(size: number) {
        this.parent = arrayOfZeros(size).map((_, i: number) => i)
        this.rank = arrayOfZeros(size)
    }

    find(id: number): number {
        if (this.parent[id] !== id) {
            this.parent[id] = this.find(this.parent[id])
        }

        return this.parent[id]
    }

    union(x: number, y: number): boolean {
        const rootX: number = this.find(x)
        const rootY: number = this.find(y)

        if (rootX === rootY) {
            return false
        }

        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY
        } else {
            this.parent[rootY] = rootX
            this.rank[rootX]++
        }

        return true
    }
}
