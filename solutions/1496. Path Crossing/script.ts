export {isPathCrossing}

function isPathCrossing(path: string): boolean {
    const visited: Set<string> = new Set<string>()

    let x: number = 0
    let y: number = 0
    visited.add(`${x}:${y}`)

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

        const position: string = `${x}:${y}`

        if (visited.has(position)) {
            return true
        }

        visited.add(position)
    }

    return false
}
