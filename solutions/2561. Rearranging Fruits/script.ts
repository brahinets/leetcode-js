export {minCost}

function minCost(basket1: number[], basket2: number[]): number {
    const countsDelta: Map<number, number> = new Map<number, number>()
    let m: number = Infinity

    for (const b of basket1) {
        countsDelta.set(b, (countsDelta.get(b) || 0) + 1)
        m = Math.min(m, b)
    }
    for (const b of basket2) {
        countsDelta.set(b, (countsDelta.get(b) || 0) - 1)
        m = Math.min(m, b)
    }

    const merge: number[] = []
    for (const [k, c] of countsDelta.entries()) {
        if (c % 2 !== 0) {
            return -1
        }

        for (let i: number = 0; i < Math.abs(c) / 2; i++) {
            merge.push(k)
        }
    }

    merge.sort((a: number, b: number): number => a - b)
    let result: number = 0
    for (let i: number = 0; i < merge.length / 2; i++) {
        result += Math.min(2 * m, merge[i])
    }
    return result
}
