export { minJumps }

function minJumps(array: number[]): number {
    const lastIndex: number = array.length - 1

    if (lastIndex === 0) {
        return 0
    }

    const valueToIndices: Map<number, number[]> = new Map<number, number[]>()

    for (let index: number = 0; index <= lastIndex; index++) {
        const value: number = array[index]

        if (!valueToIndices.has(value)) {
            valueToIndices.set(value, [])
        }

        valueToIndices.get(value)!.push(index)
    }

    const visited: boolean[] = new Array<boolean>(array.length).fill(false)
    const queue: number[] = [0]
    visited[0] = true
    let steps: number = 0

    while (queue.length > 0) {
        const size: number = queue.length
        steps++

        for (let iteration: number = 0; iteration < size; iteration++) {
            const current: number = queue.shift()!
            const neighbors: number[] = []

            if (current - 1 >= 0) {
                neighbors.push(current - 1)
            }

            if (current + 1 <= lastIndex) {
                neighbors.push(current + 1)
            }

            const sameValueIndices: number[] | undefined = valueToIndices.get(array[current])

            if (sameValueIndices !== undefined) {
                for (const neighbor of sameValueIndices) {
                    neighbors.push(neighbor)
                }

                valueToIndices.delete(array[current])
            }

            for (const neighbor of neighbors) {
                if (visited[neighbor]) {
                    continue
                }

                if (neighbor === lastIndex) {
                    return steps
                }

                visited[neighbor] = true
                queue.push(neighbor)
            }
        }
    }

    return -1
}
