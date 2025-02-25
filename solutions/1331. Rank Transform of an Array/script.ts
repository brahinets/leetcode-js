export {arrayRankTransform}

function arrayRankTransform(arr: number[]): number[] {
    const sorted: number[] = [...arr].sort((a: number, b: number): number => a - b)

    const ranks: Map<number, number> = new Map<number, number>()
    let rank: number = 1
    for (let i: number = 0; i < sorted.length; i++) {
        if (!ranks.has(sorted[i])) {
            ranks.set(sorted[i], rank++)
        }
    }

    return arr.map((value: number): number => ranks.get(value)!)
}
