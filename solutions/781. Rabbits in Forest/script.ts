export {numRabbits}

function numRabbits(answers: number[]): number {
    const map: Map<number, number> = new Map<number, number>()
    for (const answer of answers) {
        if (!map.has(answer)) {
            map.set(answer, 0)
        }
        map.set(answer, map.get(answer)! + 1)
    }

    let result: number = 0
    for (const [key, value] of map.entries()) {
        result += Math.ceil(value / (key + 1)) * (key + 1)
    }

    return result
}
