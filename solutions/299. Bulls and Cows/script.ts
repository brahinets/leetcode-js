export {getHint}

function getHint(secret: string, guess: string): string {
    let bulls: number = 0

    const requiredCounts: Map<string, number> = new Map<string, number>()
    const providedCounts: Map<string, number> = new Map<string, number>()
    for (let i: number = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++
        } else {
            const provided: number = providedCounts.get(guess[i]) || 0
            providedCounts.set(guess[i], provided + 1)

            const required: number = requiredCounts.get(secret[i]) || 0
            requiredCounts.set(secret[i], required + 1)
        }
    }

    let cows: number = 0
    for (const [char, count] of requiredCounts) {
        cows += Math.min(providedCounts.get(char) || 0, count)
    }

    return `${bulls}A${cows}B`
}
