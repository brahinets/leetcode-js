export {openLock}

function openLock(deadends: string[], target: string): number {
    const dead: Set<string> = new Set<string>(deadends)
    if (dead.has('0000')) {
        return -1
    }

    const queue: [string, number][] = [['0000', 0]]
    const visited: Set<string> = new Set<string>(['0000'])
    while (queue.length > 0) {
        const [currentCombination, currentDepth]: [string, number] = queue.shift()!

        if (currentCombination === target) {
            return currentDepth
        }

        for (let wheel: number = 0; wheel < 4; wheel++) {
            for (const turn of [-1, 1]) {
                const newDigit: number = (Number(currentCombination[wheel]) + turn + 10) % 10
                const newCombination: string = currentCombination.slice(0, wheel) + newDigit + currentCombination.slice(wheel + 1)

                if (!visited.has(newCombination) && !dead.has(newCombination)) {
                    queue.push([newCombination, currentDepth + 1])
                    visited.add(newCombination)
                }
            }
        }
    }

    return -1
}
