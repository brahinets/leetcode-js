import {arrayOfZeros} from "./array-factories"

export {DisjointSetUnion}

class DisjointSetUnion {
    private readonly parent: number[]
    private readonly rank: number[]

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
