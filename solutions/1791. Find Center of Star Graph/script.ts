export {findCenter}

function findCenter(edges: number[][]): number {
    const firstEdge = edges[0]
    const secondEdge = edges[1]

    return (firstEdge[0] === secondEdge[0] || firstEdge[0] === secondEdge[1]) ? firstEdge[0] : firstEdge[1]
}

