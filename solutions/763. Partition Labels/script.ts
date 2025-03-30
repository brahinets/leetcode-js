export {partitionLabels}

function partitionLabels(s: string): number[] {
    let lastIndices: Map<string, number> = new Map<string, number>()
    for (let index: number = 0; index < s.length; index++) {
        lastIndices.set(s[index], index)
    }

    let result: number[] = []
    let start: number = 0
    let end: number = 0
    for (let index: number = 0; index < s.length; index++) {
        end = Math.max(end, lastIndices.get(s[index])!)

        if (index === end) {
            result.push(end - start + 1)
            start = end + 1
        }
    }

    return result
}
