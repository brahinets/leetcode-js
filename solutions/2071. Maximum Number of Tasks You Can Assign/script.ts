export {maxTaskAssign}

function maxTaskAssign(
    tasks: number[],
    workers: number[],
    pills: number,
    strength: number
): number {
    tasks.sort((a: number, b: number): number => a - b)
    workers.sort((a: number, b: number): number => a - b)

    let left: number = 0
    let right: number = Math.min(tasks.length, workers.length)
    let result: number = 0

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)

        if (canAssign(mid, tasks, workers, pills, strength)) {
            result = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return result
}

function canAssign(
    k: number,
    tasks: number[],
    workers: number[],
    pills: number,
    strength: number
): boolean {
    const selectedTasks: number[] = tasks.slice(0, k)
    const selectedWorkers: number[] = workers.slice(workers.length - k)

    let p: number = pills

    for (let i: number = k - 1; i >= 0; i--) {
        const task: number = selectedTasks[i]

        if (selectedWorkers[selectedWorkers.length - 1] >= task) {
            selectedWorkers.pop()
        } else {
            while (selectedWorkers.length > 0 && selectedWorkers[0] + strength < task) {
                selectedWorkers.shift()
            }

            if (selectedWorkers.length === 0 || p === 0) {
                return false
            }

            p--
            selectedWorkers.shift()
        }
    }

    return true
}
