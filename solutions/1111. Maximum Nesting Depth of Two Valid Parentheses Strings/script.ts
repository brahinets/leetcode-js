export { maxDepthAfterSplit }

function maxDepthAfterSplit(sequence: string): number[] {
    const groupAssignments: number[] = []
    let currentDepth: number = 0

    for (const character of sequence) {
        if (character === '(') {
            currentDepth++
            groupAssignments.push(currentDepth % 2)
        } else {
            groupAssignments.push(currentDepth % 2)
            currentDepth--
        }
    }

    return groupAssignments
}
