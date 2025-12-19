export {findAllPeople}

function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
    const timeMap: Map<number, [number, number][]> = new Map<number, [number, number][]>()
    for (const [a, b, t] of meetings) {
        if (!timeMap.has(t)) {
            timeMap.set(t, [])
        }

        timeMap.get(t)!.push([a, b])
    }

    const times: number[] = Array.from(timeMap.keys()).sort((a: number, b: number): number => a - b)
    const known: Set<number> = new Set<number>([0, firstPerson])

    for (const t of times) {
        const edges: [number, number][] = timeMap.get(t)!
        const parent: Map<number, number> = new Map<number, number>()

        for (const [a, b] of edges) {
            parent.set(a, a)
            parent.set(b, b)
        }

        for (const [a, b] of edges) {
            union(parent, a, b)
        }

        const groupMap: Map<number, number[]> = new Map<number, number[]>()
        for (const p of parent.keys()) {
            const root: number = find(parent, p)
            if (!groupMap.has(root)) {
                groupMap.set(root, [])
            }

            groupMap.get(root)!.push(p)
        }

        for (const group of groupMap.values()) {
            if (group.some((p: number): boolean => known.has(p))) {
                for (const p of group) known.add(p)
            }
        }
    }

    return Array.from(known).sort((a: number, b: number): number => a - b)
}

function find(parent: Map<number, number>, x: number): number {
    if (parent.get(x) !== x) {
        parent.set(x, find(parent, parent.get(x)!))
    }

    return parent.get(x)!
}

function union(parent: Map<number, number>, x: number, y: number): void {
    parent.set(find(parent, x), find(parent, y))
}
