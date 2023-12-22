export {maxScore}

function maxScore(s: string): number {
    let max: number = 0

    for (let i: number = 1; i < s.length; i++) {
        const left: string = s.slice(0, i)
        const right: string = s.slice(i)
        const score: number = count(left, '0') + count(right, '1')

        if (score > max) {
            max = score
        }
    }

    return max
}

function count(str: string, char: string): number {
    return str.split(char).length - 1
}
