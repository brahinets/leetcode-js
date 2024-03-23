export {bagOfTokensScore}

function bagOfTokensScore(tokens: number[], power: number): number {
    tokens = tokens.toSorted((a: number, b: number): number => a - b)

    let score: number = 0
    while (tokens.length > 0) {
        if (power >= tokens[0]) {
            power -= tokens.shift()!
            score++
        } else if (tokens.length > 1 && score > 0) {
            power += tokens.pop()!
            score--
        } else {
            break
        }
    }

    return score
}
