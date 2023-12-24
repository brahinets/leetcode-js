export {minOperations}

function minOperations(s: string): number {
    const changeZeros: number = minOperationsForChar(s, '0')
    const changesOnes: number = minOperationsForChar(s, '1')

    return Math.min(changeZeros, changesOnes)
}

function minOperationsForChar(s: string, char: string): number {
    let count: number = 0

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] !== char) {
            count++
        }

        char = char === '0' ? '1' : '0'
    }

    return count
}
