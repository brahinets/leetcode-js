export {isPathCrossing}

function isPathCrossing(path: string): boolean {
    const visited: Set<string> = new Set<string>()

    const head: Point = new Point(0, 0)
    visited.add(head.toString())

    for (const direction of path) {
        switch (direction) {
            case 'N':
                head.north()
                break
            case 'E':
                head.east()
                break
            case 'S':
                head.south()
                break
            case 'W':
                head.west()
                break
        }

        if (visited.has(head.toString())) {
            return true
        }

        visited.add(head.toString())
    }

    return false
}

class Point {
    constructor(private x: number, private y: number) {
        this.x = x
        this.y = y
    }

    north(): void {
        this.y++
    }

    south(): void {
        this.y--
    }

    west(): void {
        this.x--
    }

    east(): void {
        this.x++
    }

    toString(): string {
        return `${this.x}:${this.y}`
    }
}
