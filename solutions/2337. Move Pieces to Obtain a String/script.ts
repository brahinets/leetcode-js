export {canChange}

function canChange(start: string, target: string): boolean {
    if (start === target) {
        return true
    }

    let waitL: number = 0
    let waitR: number = 0

    for (let i: number = 0; i < start.length; i++) {
        const current: string = start[i]
        const goal: string = target[i]

        if (current === 'R') {
            if (waitL > 0) {
                return false
            }
            waitR++
        }
        if (goal === 'L') {
            if (waitR > 0) {
                return false
            }
            waitL++
        }

        if (goal === 'R') {
            if (waitR === 0) {
                return false
            }
            waitR--
        }
        if (current === 'L') {
            if (waitL === 0) {
                return false
            }
            waitL--
        }
    }

    return waitL === 0 && waitR === 0
}
