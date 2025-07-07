import {PriorityQueue} from "../../common/PriorityQueue"

export {maxEvents}

function maxEvents(events: number[][]): number {
    let maxDay: number = 0
    for (const e of events) {
        maxDay = Math.max(maxDay, e[1])
    }

    events.sort((a: number[], b: number[]): number => a[0] - b[0])

    const pq: PriorityQueue<number> = new PriorityQueue<number>(
        (a: number, b: number): number => a - b,
    )
    let max: number = 0
    for (let i: number = 1, j = 0; i <= maxDay; i++) {
        while (j < events.length && events[j][0] <= i) {
            pq.enqueue(events[j][1])
            j++
        }

        while (!pq.isEmpty() && pq.peek()! < i) {
            pq.dequeue()
        }

        if (!pq.isEmpty()) {
            pq.dequeue()
            max++
        }
    }

    return max
}
