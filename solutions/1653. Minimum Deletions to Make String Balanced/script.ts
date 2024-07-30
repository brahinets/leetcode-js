export {minimumDeletions}

function minimumDeletions(s: string): number {
    let bCount: number = 0
    let deletions: number = 0

    for (const char of s) {
        if (char === 'b') {
            bCount++
        } else {
            deletions = Math.min(deletions + 1, bCount)
        }
    }

    return deletions
}
