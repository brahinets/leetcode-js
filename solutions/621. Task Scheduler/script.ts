export {leastInterval}

function leastInterval(tasks: string[], n: number): number {
    const work: Map<string, number> = collectWork(tasks)

    const counts: number[] = [...work.values()]
        .sort((firstCount: number, secondCount: number): number =>secondCount - firstCount)

    const maxFreq: number = counts[0] - 1
    let idleSlots: number = maxFreq * n
    for (let i: number = 1; i < counts.length;i++) {
        idleSlots -= Math.min(counts[i], maxFreq)
    }

    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length
}

function collectWork(tasks: string[]): Map<string, number> {
    const work: Map<string, number> = new Map<string, number>()

    for (const task of tasks) {
        if (work.has(task)) {
            work.set(task, work.get(task)! + 1)
        } else {
            work.set(task, 1)
        }
    }

    return work
}
