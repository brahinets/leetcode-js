export {slidingPuzzle}

function slidingPuzzle(board: number[][]): number {
    const target: string = '123450'
    const start: string = board.flat().join('')
    const directions = [
        [1, 3],
        [0, 2, 4],
        [1, 5],
        [0, 4],
        [1, 3, 5],
        [2, 4]
    ]

    let queue: string[] = [start]
    let visited: Set<string> = new Set([start])
    let moves: number = 0

    while (queue.length > 0) {
        let nextQueue: string[] = []

        for (let current of queue) {
            if (current === target) {
                return moves
            }

            let zeroIndex: number = current.indexOf('0')
            for (let direction of directions[zeroIndex]) {
                let next = swap(current, zeroIndex, direction)
                if (!visited.has(next)) {
                    visited.add(next)
                    nextQueue.push(next)
                }
            }
        }

        queue = nextQueue
        moves++
    }

    return -1
}

function swap(current: string, zeroIndex: number, direction: number): string {
    let currentArray: string[] = current.split('')
    let temp: string = currentArray[zeroIndex]

    currentArray[zeroIndex] = currentArray[direction]
    currentArray[direction] = temp

    return currentArray.join('')
}
