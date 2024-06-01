export {scoreOfString}

function scoreOfString(s: string): number {
    let score: number = 0

    for (let i: number = 1; i < s.length; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1))
    }

    return score
}
