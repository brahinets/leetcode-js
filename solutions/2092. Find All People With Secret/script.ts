export {findAllPeople}

function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
    const timeMap: Map<number, [number, number][]> = groupMeetingsByTime(meetings)
    const known: Set<number> = new Set<number>([0, firstPerson])
    const times: number[] = Array.from(timeMap.keys()).sort((a: number, b: number): number => a - b)

    for (const t of times) {
        const edges: [number, number][] = timeMap.get(t)!
        const group: Set<number> = spreadSecretAtTime(edges, known)
        for (const person of group) {
            known.add(person)
        }
    }

    return Array.from(known).sort((a: number, b: number): number => a - b)
}

function groupMeetingsByTime(meetings: number[][]): Map<number, [number, number][]> {
    const timeMap: Map<number, [number, number][]> = new Map<number, [number, number][]>()
    for (const [a, b, t] of meetings) {
        if (!timeMap.has(t)) {
            timeMap.set(t, [])
        }

        timeMap.get(t)!.push([a, b])
    }

    return timeMap
}

function spreadSecretAtTime(edges: [number, number][], known: Set<number>): Set<number> {
    const group: Set<number> = new Set<number>()

    for (const [a, b] of edges) {
        if (known.has(a) || known.has(b)) {
            group.add(a)
            group.add(b)
        }
    }

    let changed: boolean = true
    while (changed) {
        changed = false

        for (const [a, b] of edges) {
            if (group.has(a) || group.has(b)) {
                if (!group.has(a)) {
                    group.add(a)
                    changed = true
                }

                if (!group.has(b)) {
                    group.add(b)
                    changed = true
                }
            }
        }
    }

    return group
}
