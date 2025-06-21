import {count} from "../../common/array-utils"

export {minimumDeletions}

function minimumDeletions(word: string, k: number): number {
    const counts: Map<string, number> = count(word.split(""))

    let minimumDeletions: number = word.length
    for (const a of counts.values()) {
        let deleted: number = 0

        for (const b of counts.values()) {
            if (a > b) {
                deleted += b
            } else if (b > a + k) {
                deleted += b - (a + k)
            }
        }

        minimumDeletions = Math.min(minimumDeletions, deleted)
    }

    return minimumDeletions
}
