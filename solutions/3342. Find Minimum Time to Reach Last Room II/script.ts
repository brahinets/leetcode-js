import {PriorityQueue} from "../../common/PriorityQueue"
import {matrixOf} from "../../common/array-factories"

export {minTimeToReach}

const directions: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function minTimeToReach(moveTime: number[][]): number {
    const distances: number[][] = matrixOf(Infinity, moveTime.length, moveTime[0].length)
    const visited: boolean[][] = matrixOf(false, moveTime.length, moveTime[0].length)
    const priorityQueue: PriorityQueue<State> = new PriorityQueue<State>((a: State, b: State): number => a.dist - b.dist)

    distances[0][0] = 0
    priorityQueue.enqueue({x: 0, y: 0, dist: 0})

    while (!priorityQueue.isEmpty()) {
        const currentState: State = priorityQueue.dequeue()!

        if (visited[currentState.x][currentState.y]) {
            continue
        }

        if (currentState.x == moveTime.length - 1 && currentState.y == moveTime[0].length - 1) {
            break
        }

        visited[currentState.x][currentState.y] = true

        for (const direction of directions) {
            const nextX: number = currentState.x + direction[0]
            const nextY: number = currentState.y + direction[1]

            if (nextX < 0 || nextX >= moveTime.length || nextY < 0 || nextY >= moveTime[0].length) {
                continue
            }

            const newDistance: number = Math.max(distances[currentState.x][currentState.y], moveTime[nextX][nextY]) + ((currentState.x + currentState.y) % 2) + 1
            if (distances[nextX][nextY] > newDistance) {
                distances[nextX][nextY] = newDistance

                priorityQueue.enqueue({x: nextX, y: nextY, dist: newDistance})
            }
        }
    }

    return distances[moveTime.length - 1][moveTime[0].length - 1]
}

class State {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly dist: number
    ) {
    }
}
