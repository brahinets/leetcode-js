export { minOperations }


function minOperations(s: string, k: number): number {
    const n: number = s.length
    let zeros: number = 0
    for (const c of s) {
        if (c === '0') {
            zeros++
        }
    }

    if (zeros === 0) {
        return 0
    }

    const parent: number[] = Array.from({ length: n + 5 }, (_, i) => i)
    parent[zeros] = zeros + 2

    let queue: number[] = [zeros]
    let ops: number = 0

    while (queue.length > 0) {
        ops++

        const nextQueue: number[] = []

        for (const cur of queue) {
            const l: number = Math.abs(cur - k)
            const r: number = Math.min(cur + k, 2 * n - cur - k)
            const p: number = (cur + k) % 2
            let next: number = find(parent, l % 2 === p ? l : l + 1)

            while (next <= r) {
                if (next === 0) {
                    return ops
                }

                nextQueue.push(next)
                parent[next] = next + 2

                next = find(parent, next + 2)
            }
        }

        queue = nextQueue
    }

    return -1
}

function find(parent: number[], i: number): number {
    while (parent[i] !== i) {
        parent[i] = parent[parent[i]]

        i = parent[i]
    }

    return i
}
