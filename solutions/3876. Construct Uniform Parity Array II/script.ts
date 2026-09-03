export { uniformArray }

function uniformArray(numbers: number[]): boolean {
    return canConstructWithTargetParity(numbers, 0) || canConstructWithTargetParity(numbers, 1)
}

function canConstructWithTargetParity(numbers: number[], targetParity: number): boolean {
    const sortedNumbers: number[] = [...numbers].sort((first: number, second: number): number => first - second)
    const hasSeenParity: boolean[] = [false, false]

    for (const number of sortedNumbers) {
        const parity: number = number % 2

        if (parity !== targetParity) {
            const requiredParity: number = parity ^ targetParity

            if (!hasSeenParity[requiredParity]) {
                return false
            }
        }

        hasSeenParity[parity] = true
    }

    return true
}
