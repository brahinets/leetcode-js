export {maxTaskAssign}

function maxTaskAssign(
    tasks: number[],
    workers: number[],
    pills: number,
    strength: number
): number {
    tasks.sort((a: number, b: number): number => a - b)
    workers.sort((a: number, b: number): number => a - b)

    let low: number = 0
    let high: number = Math.min(tasks.length, workers.length)

    while (low < high) {
        const mid: number = Math.floor((low + high + 1) / 2)

        if (canAssign(mid, strength, workers, pills, tasks)) {
            low = mid
        } else {
            high = mid - 1
        }
    }

    return low
}

function canAssign(taskCount: number, strength: number, workers: number[], pills: number, tasks: number[]): boolean {
    const boosted: number[] = []
    let workerIndex: number = workers.length - 1
    let pillsLeft: number = pills

    for (let taskIndex: number = taskCount - 1; taskIndex >= 0; taskIndex--) {
        const task: number = tasks[taskIndex]

        if (boosted.length > 0 && boosted[0] >= task) {
            boosted.shift()
        } else if (workerIndex >= 0 && workers[workerIndex] >= task) {
            workerIndex--
        } else {
            while (workerIndex >= 0 && workers[workerIndex] + strength >= task) {
                boosted.push(workers[workerIndex])
                workerIndex--
            }

            if (boosted.length === 0 || pillsLeft === 0) {
                return false
            }

            boosted.pop()

            pillsLeft--
        }
    }

    return true
}
