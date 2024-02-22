export {findJudge}

function findJudge(n: number, trust: number[][]): number {
    const iTrust: Map<number, Set<number>> = new Map<number, Set<number>>();
    const trustMe: Map<number, Set<number>> = new Map<number, Set<number>>();
    for (let i: number = 1; i <= n; i++) {
        iTrust.set(i, new Set<number>())
        trustMe.set(i, new Set<number>())
    }

    for (const [from, to] of trust) {
        iTrust.set(from, new Set([...iTrust.get(from)!, to]))
        trustMe.set(to, new Set([...trustMe.get(to)!, from]))
    }

    for (let i: number = 1; i <= n; i++) {
        if (iTrust.get(i)!.size === 0 && trustMe.get(i)!.size === n - 1) {
            return i
        }
    }

    return -1
}
