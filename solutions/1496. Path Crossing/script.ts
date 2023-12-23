export {isPathCrossing}

function isPathCrossing(path: string): boolean {
    const visited: Set<string> = new Set<string>()

    let x: number = 0
    let y: number = 0
    visited.add(new Point(x, y).toString())

    for (const direction of path) {
        switch (direction) {
            case 'N':
                y++
                break
            case 'E':
                x++
                break
            case 'S':
                y--
                break
            case 'W':
                x--
                break
        }

        const position: Point = new Point(x, y)
        if (visited.has(position.toString())) {
            return true
        }

        visited.add(position.toString())
    }

    return false
}

class Point {
    private readonly x: number
    private readonly y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    toString(): string {
        return `${this.x}:${this.y}`
    }
}
