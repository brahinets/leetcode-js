export { countServers }

function countServers(
    serverCount: number,
    logs: number[][],
    intervalLength: number,
    queries: number[]
): number[] {
    const queryIndices: number[] = queries
        .map((value: number, index: number): number => index)
        .sort((first: number, second: number): number => {
            return queries[first] - queries[second]
        })

    const sortedLogs: number[][] = [...logs].sort(
        (first: number[], second: number[]): number => first[1] - second[1]
    )

    const requestCounts = new Map<number, number>()
    const answers: number[] = new Array<number>(queries.length).fill(0)
    let activeServers: number = 0
    let nextLogIndex: number = 0
    let oldestLogIndex: number = 0

    for (const queryIndex of queryIndices) {
        const queryTime: number = queries[queryIndex]

        while (nextLogIndex < sortedLogs.length
            && sortedLogs[nextLogIndex][1] <= queryTime) {
            const serverId: number = sortedLogs[nextLogIndex][0]
            const count: number = requestCounts.get(serverId) ?? 0

            if (count === 0) {
                activeServers++
            }

            requestCounts.set(serverId, count + 1)
            nextLogIndex++
        }

        const earliestTime: number = queryTime - intervalLength

        while (oldestLogIndex < nextLogIndex
            && sortedLogs[oldestLogIndex][1] < earliestTime) {
            const serverId: number = sortedLogs[oldestLogIndex][0]
            const count: number = requestCounts.get(serverId) ?? 0

            if (count === 1) {
                activeServers--
            }

            requestCounts.set(serverId, count - 1)
            oldestLogIndex++
        }

        answers[queryIndex] = serverCount - activeServers
    }

    return answers
}
