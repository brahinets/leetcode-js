export {kthCharacter}

function kthCharacter(k: number, operations: number[]): string {
    const lengths: number[] = prepareLengths(operations)

    let position: number = k
    let increments: number = 0

    for (let i: number = operations.length - 1; i >= 0; i--) {
        const prevLength: number = lengths[i]

        if (position > prevLength) {
            position -= prevLength
            if (operations[i] === 1) {
                increments++
            }
        }
    }

    return String.fromCharCode(((increments % 26) + 'a'.charCodeAt(0)))
}

function prepareLengths(operations: number[]): number[] {
    let length: number = 1
    const lengths: number[] = [1]

    for (let i: number = 0; i < operations.length; i++) {
        length *= 2
        lengths.push(length)
    }

    return lengths
}
