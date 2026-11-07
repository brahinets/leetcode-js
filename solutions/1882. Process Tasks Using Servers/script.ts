import { PriorityQueue } from '../../common/PriorityQueue'

export { assignTasks }

type IdleServer = [weight: number, index: number]
type BusyServer = [freeTime: number, index: number]

const min: (a: IdleServer, b: IdleServer) => number = (
    a: IdleServer,
    b: IdleServer
): number => {
    if (a[0] !== b[0]) {
        return a[0] - b[0]
    }

    return a[1] - b[1]
}

function assignTasks(servers: number[], tasks: number[]): number[] {
    const idle: PriorityQueue<IdleServer> = new PriorityQueue<IdleServer>(min)
    const busy: PriorityQueue<BusyServer> = new PriorityQueue<BusyServer>(min)

    for (let i: number = 0; i < servers.length; i++) {
        idle.enqueue([servers[i], i])
    }

    let currentTime: number = 0
    const result: number[] = []

    // Move every server that has finished its task from busy back to idle
    const release: () => void = (): void => {
        while (!busy.isEmpty()) {
            const entry: BusyServer = busy.dequeue()!
            if (entry[0] > currentTime) {
                busy.enqueue(entry) // not finished yet — put it back and stop
                break
            }
            idle.enqueue([servers[entry[1]], entry[1]])
        }
    }

    for (let i: number = 0; i < tasks.length; i++) {
        currentTime = Math.max(currentTime, i)
        release()

        if (idle.isEmpty()) {
            const [freeTime, serverIndex]: BusyServer = busy.dequeue()!
            currentTime = freeTime
            idle.enqueue([servers[serverIndex], serverIndex])
            release()
        }

        const [, serverIndex]: IdleServer = idle.dequeue()!
        result.push(serverIndex)
        busy.enqueue([currentTime + tasks[i], serverIndex])
    }

    return result
}
