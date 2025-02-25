import {TreeNode} from "../../common/TreeNode"

export {TreeNode, survivedRobotsHealths}

function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    const robots: Robot[] = []
    const map: Map<number, Robot> = new Map<number, Robot>()

    for (let i = 0; i < healths.length; i++) {
        const position = positions[i]
        const health = healths[i]
        const direction = directions[i]
        const robot = new Robot(position, health, direction)
        robots.push(robot)
        map.set(position, robot)
    }

    collide(robots)

    return collectAlive(positions, map)
}

class Robot {
    position: number
    health: number
    direction: string

    constructor(position: number, health: number, direction: string) {
        this.position = position
        this.health = health
        this.direction = direction
    }
}

function collide(robots: Robot[]): void {
    robots.sort((x: Robot, y: Robot): number => x.position - y.position)

    const stack: Robot[] = []
    for (const robot of robots) {
        switch (robot.direction) {
            case 'R':
                stack.push(robot)
                break
            case 'L':
                while (stack.length > 0 && robot.health > 0) {
                    const enemy = stack.pop()!
                    if (enemy.health === robot.health) {
                        robot.health = 0
                        enemy.health = 0
                    } else if (enemy.health > robot.health) {
                        robot.health = 0
                        enemy.health--
                        stack.push(enemy)
                    } else {
                        robot.health--
                        enemy.health = 0
                    }
                }
                break
            default:
                break
        }
    }
}

function collectAlive(positions: number[], map: Map<number, Robot>): number[] {
    const result: number[] = []

    for (const position of positions) {
        const robot: Robot = map.get(position)!

        if (robot.health > 0) {
            result.push(robot.health)
        }
    }

    return result
}
