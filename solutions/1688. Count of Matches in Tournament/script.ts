export {numberOfMatches}

function numberOfMatches(n: number): number {
    let matches: number = 0

    while (n > 1) {
        const evenTeamsCount: boolean = n % 2 === 0
        const roundMatches: number = evenTeamsCount ? n / 2 : (n - 1) / 2

        n = evenTeamsCount ? n / 2 : ((n - 1) / 2 + 1)
        matches += roundMatches
    }

    return matches
}
