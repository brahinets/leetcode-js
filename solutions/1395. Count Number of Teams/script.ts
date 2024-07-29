export {numTeams}

function numTeams(rating: number[]): number {
    let count: number = 0

    for (let i = 0; i < rating.length; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if (isGoodTeam(rating, i, j, k)) {
                    count++
                }
            }
        }
    }

    return count
}

function isGoodTeam(rating: number[], i: number, j: number, k: number): boolean {
    return (rating[i] < rating[j] && rating[j] < rating[k]) || (rating[i] > rating[j] && rating[j] > rating[k]);
}
