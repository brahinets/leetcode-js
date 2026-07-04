import {DisjointSetUnion} from '../../common/DisjointSetUnion'

export {minimumScoreBetweenCities}

function minimumScoreBetweenCities(cityCount: number, roads: number[][]): number {
    const disjointSetUnion: DisjointSetUnion = groupConnectedCities(cityCount, roads)
    const targetRoot: number = disjointSetUnion.find(1)

    return findMinimumDistanceInComponent(roads, disjointSetUnion, targetRoot)
}

function groupConnectedCities(cityCount: number, roads: number[][]): DisjointSetUnion {
    const disjointSetUnion: DisjointSetUnion = new DisjointSetUnion(cityCount + 1)

    for (const [cityA, cityB] of roads) {
        disjointSetUnion.union(cityA, cityB)
    }

    return disjointSetUnion
}

function findMinimumDistanceInComponent(roads: number[][], disjointSetUnion: DisjointSetUnion, targetRoot: number): number {
    let minimumDistance: number = Number.POSITIVE_INFINITY

    for (const [cityA, , distance] of roads) {
        if (disjointSetUnion.find(cityA) === targetRoot) {
            minimumDistance = Math.min(minimumDistance, distance)
        }
    }

    return minimumDistance
}
