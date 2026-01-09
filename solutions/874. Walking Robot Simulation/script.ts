export {robotSim}

const DIRECTIONS: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]]
const RIGHT: number = -1
const LEFT: number = -2

function robotSim(commands: number[], obstacles: number[][]): number {
    const obstaclesSet: Set<string> = new Set<string>(obstacles.map(([x, y]: number[]): string => `${x},${y}`))

    let currentX: number = 0
    let currentY: number = 0
    let maxDistance: number = 0
    let direction: number = 0

    for (const command of commands) {
        if (command === RIGHT) {
            direction = (direction + 1) % 4
        } else if (command === LEFT) {
            direction = (direction + 3) % 4
        } else {
            for (let i: number = 0; i < command; i++) {
                const nextX: number = currentX + DIRECTIONS[direction][0]
                const nextY: number = currentY + DIRECTIONS[direction][1]

                if (obstaclesSet.has(`${nextX},${nextY}`)) {
                    break
                }

                currentX = nextX
                currentY = nextY

                maxDistance = Math.max(maxDistance, currentX ** 2 + currentY ** 2)
            }
        }
    }

    return maxDistance
}
