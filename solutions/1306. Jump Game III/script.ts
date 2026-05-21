import { arrayOf } from "../../common/array-factories"

export { canReach }

function canReach(array: number[], start: number): boolean {
    const visited: boolean[] = arrayOf(false, array.length)
    const queue: number[] = [start]
    visited[start] = true

    while (queue.length > 0) {
        const current: number = queue.shift()!

        if (array[current] === 0) {
            return true
        }

        const forward: number = current + array[current]
        const backward: number = current - array[current]

        if (forward < array.length && !visited[forward]) {
            visited[forward] = true
            queue.push(forward)
        }

        if (backward >= 0 && !visited[backward]) {
            visited[backward] = true
            queue.push(backward)
        }
    }

    return false
}
