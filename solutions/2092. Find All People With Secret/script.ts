import {Graph} from "../2642. Design Graph With Shortest Path Calculator/script";

export {findAllPeople}

function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
    let graph: Graph = new Graph(n, meetings)

    const awareSince: Map<number, number> = new Map<number, number>()
    awareSince.set(0, 0)
    awareSince.set(firstPerson, 0)

    const leakQueue: number[][] = [[0, 0], [firstPerson, 0]]
    while (leakQueue.length > 0) {
        const [leaker, leakerSince] = leakQueue.pop()!

        for (const [coMeeter, coMeeterAt] of graph.getNeighbours(leaker)) {
            if (coMeeterAt >= leakerSince && (awareSince.get(coMeeter) === undefined || awareSince.get(coMeeter)! > coMeeterAt)) {
                awareSince.set(coMeeter, coMeeterAt)
                leakQueue.push([coMeeter, coMeeterAt])
            }
        }
    }

    return [...awareSince.keys()]
        .sort((a: number, b: number): number => a - b)
}
