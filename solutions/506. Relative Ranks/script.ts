export {findRelativeRanks}

const NAMED_PLACE: Map<number, string> = new Map<number, string>([
    [1, "Gold Medal"],
    [2, "Silver Medal"],
    [3, "Bronze Medal"]
])

function findRelativeRanks(score: number[]): string[] {
    const sorted: number[] = [...score].sort((a: number, b: number) => b - a)

    return score.map((s: number): string => map(s, sorted))
}

function map(s: number, sorted: number[]): string {
    const index: number = sorted.indexOf(s) + 1

    return NAMED_PLACE.get(index) ?? String(index)
}
