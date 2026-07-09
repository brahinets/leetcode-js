import {DisjointSetUnion} from '../../common/DisjointSetUnion'

export {pathExistenceQueries}

function pathExistenceQueries(nodeCount: number, nums: number[], maxDifference: number, queries: number[][]): boolean[] {
    const disjointSetUnion: DisjointSetUnion = groupReachableNodes(nodeCount, nums, maxDifference)

    return queries.map(([firstNode, secondNode]: number[]): boolean =>
        disjointSetUnion.find(firstNode) === disjointSetUnion.find(secondNode)
    )
}

function groupReachableNodes(nodeCount: number, nums: number[], maxDifference: number): DisjointSetUnion {
    const disjointSetUnion: DisjointSetUnion = new DisjointSetUnion(nodeCount)

    for (let index: number = 0; index < nodeCount - 1; index++) {
        if (nums[index + 1] - nums[index] <= maxDifference) {
            disjointSetUnion.union(index, index + 1)
        }
    }

    return disjointSetUnion
}
