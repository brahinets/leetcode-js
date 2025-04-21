export {numberOfArrays}

function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let x: number = 0
    let y: number = 0

    let current: number = 0
    for (let difference of differences) {
        current += difference

        x = Math.min(x, current)
        y = Math.max(y, current)

        if (y - x > upper - lower) {
            return 0
        }
    }

    return upper - lower - (y - x) + 1
}
