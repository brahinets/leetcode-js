export {mostBooked}

function mostBooked(n: number, meetings: number[][]): number {
    const availability: Map<number, number> = new Map<number, number>()
    const bookings: Map<number, number> = new Map<number, number>()
    for (let i: number = 0; i < n; i++) {
        availability.set(i, 0)
        bookings.set(i, 0)
    }

    meetings.sort(([startFirst,]: number[], [startSecond,]: number[]): number => {
        return startFirst - startSecond
    })

    for (const [start, end] of meetings) {
        const [room, since]: [number, number] = findFirstAvailableRoom(start, availability)

        availability.set(room, since <= start ? end : availability.get(room)! + (end - start))
        bookings.set(room, bookings.get(room)! + 1)
    }

    let maxBooked: number = -1
    let maxCount: number = -1
    for (const [roomId, bookingsCount] of bookings) {
        if (bookingsCount > maxCount) {
            maxCount = bookingsCount
            maxBooked = roomId
        }
    }

    return maxBooked
}

function findFirstAvailableRoom(start: number, availability: Map<number, number>): [number, number] {
    const bookings: [number, number][] = [...availability.entries()]

    for (const [room, freeSince] of bookings) {
        if (freeSince <= start) {
            return [room, freeSince]
        }
    }

    return bookings.sort(([roomFirst, sinceFirst]: [number, number], [roomSecond, sinceSecond]: [number, number]): number => {
        const since: number = sinceFirst - sinceSecond
        if (since !== 0) {
            return since
        }

        return Math.min(roomFirst, roomSecond)
    })[0]
}
