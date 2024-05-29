export {numSteps}

function numSteps(s: string): number {
    let num: number = parseInt(s, 2)

    let steps: number = 0
    while (num !== 1) {
        steps++

        if (num % 2 === 0) {
            num /= 2
        } else if (num % 2 === 1 || num === 0) {
            num += 1
        }
    }

    return steps
}
