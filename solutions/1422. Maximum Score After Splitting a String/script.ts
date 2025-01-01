export {maxScore}

function maxScore(s: string): number {
    let maxScore: number = 0
    let ones: number = 0
    let zeros: number = 0

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === "1") {
            ones++
        }
    }

    for (let i: number = 0; i < s.length - 1; i++) {
        if (s[i] === "0") {
            zeros++
        } else {
            ones--
        }

        maxScore = Math.max(maxScore, zeros + ones)
    }

    return maxScore
}
