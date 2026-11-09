import { PriorityQueue } from '../../common/PriorityQueue'
import { arrayOfZeros } from '../../common/array-factories'

export { busiestServers }

type BusyServer = [freeTime: number, index: number]

const byFreeTime: (a: BusyServer, b: BusyServer) => number = (
    a: BusyServer,
    b: BusyServer
): number => {
    if (a[0] !== b[0]) {
        return a[0] - b[0]
    }

    return a[1] - b[1]
}

function busiestServers(k: number, arrival: number[], load: number[]): number[] {
    const available: PriorityQueue<number> = new PriorityQueue<number>(
        (a: number, b: number): number => a - b
    )
    const busy: PriorityQueue<BusyServer> = new PriorityQueue<BusyServer>(byFreeTime)
    const handledCounts: number[] = arrayOfZeros(k)

    for (let serverIndex: number = 0; serverIndex < k; serverIndex++) {
        available.enqueue(serverIndex)
    }

    for (let requestIndex: number = 0; requestIndex < arrival.length; requestIndex++) {
        while (true) {
            const nextServer: BusyServer | undefined = busy.dequeue()

            // LeetCode's built-in PriorityQueue yields null, not undefined, when empty
            if (nextServer === undefined || nextServer === null) {
                break
            }

            if (nextServer[0] > arrival[requestIndex]) {
                busy.enqueue(nextServer)

                break
            }

            const serverIndex: number = nextServer[1]
            const cycleOffset: number = (((serverIndex - requestIndex) % k) + k) % k

            available.enqueue(requestIndex + cycleOffset)
        }

        const earliestKey: number | null | undefined = available.dequeue()

        if (earliestKey === undefined || earliestKey === null) {
            continue
        }

        const serverIndex: number = earliestKey % k

        handledCounts[serverIndex]++
        busy.enqueue([arrival[requestIndex] + load[requestIndex], serverIndex])
    }

    let maximumHandled: number = 0

    for (let serverIndex: number = 0; serverIndex < k; serverIndex++) {
        if (handledCounts[serverIndex] > maximumHandled) {
            maximumHandled = handledCounts[serverIndex]
        }
    }

    const busiest: number[] = []

    for (let serverIndex: number = 0; serverIndex < k; serverIndex++) {
        if (handledCounts[serverIndex] === maximumHandled) {
            busiest.push(serverIndex)
        }
    }

    return busiest
}
