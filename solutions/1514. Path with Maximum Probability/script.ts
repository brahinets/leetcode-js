export {maxProbability}

function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
    const paths: number[][][] = buildPaths(edges, start, end)

    let maxChance: number = 0
    for (const path of paths) {
        const chance: number = calculatePathSuccessProbability(path, succProb, edges)
        if (chance > maxChance) {
            maxChance = chance
        }
    }

    return maxChance
}

function buildPaths(edges: number[][], start: number, end: number): number[][][] {
    const paths: number[][][] = []

    while (edges.length > 0) {
        const edgesToTarget: number[][] = edges.filter((e: number[]): boolean => e[0] === end || e[1] === end)
        edges = edges.filter((e: number[]): boolean => e[0] !== end && e[1] !== end)

        if(edgesToTarget.length === 0) {
            break
        }

        for (const edgeToTarget of edgesToTarget) {
            if (edgeToTarget[0] === start || edgeToTarget[1] === start) {
                const items: number[][] = [edgeToTarget]
                paths.push(items)
            } else {
                const prefixes: number[][][] = edgeToTarget[0] === end ?
                    buildPaths(edges, start, edgeToTarget[1]) :
                    buildPaths(edges, start, edgeToTarget[0])

                for (const prefix of prefixes) {
                    const items: number[][] = [...prefix, edgeToTarget]
                    paths.push(items)
                }
            }
        }
    }

    return paths
}

function calculatePathSuccessProbability(path: number[][], succProb: number[], edges: number[][]) {
    let chance: number = 1

    for (const segment of path) {
        chance *= findSegmentSuccessProbability(segment, edges, succProb)
    }

    return chance
}

function findSegmentSuccessProbability(segment: number[], edges: number[][], successProbability: number[]): number {
    for (let i: number = 0; i < edges.length; i++) {
        if (edges[i][0] === segment[0] && edges[i][1] === segment[1]) {
            return successProbability[i]
        }
    }

    return 0
}
