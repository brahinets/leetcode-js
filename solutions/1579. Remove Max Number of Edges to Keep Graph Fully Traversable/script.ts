import {DisjointSetUnion} from "../../common/DisjointSetUnion"

export {maxNumEdgesToRemove}

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
