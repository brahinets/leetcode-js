export { Log, consecutiveNumbers }

interface Log {
    id: number
    num: string
}

function consecutiveNumbers(logs: Log[]): string[] {
    const sortedLogs: Log[] = [...logs].sort(
        (a: Log, b: Log): number => a.id - b.id
    )
    const consecutiveNumbersResult: string[] = []
    const seenConsecutiveNumbers: Set<string> = new Set<string>()
    let currentNumber: string | null = null
    let currentRunLength: number = 0

    for (const log of sortedLogs) {
        if (log.num === currentNumber) {
            currentRunLength += 1
        } else {
            currentNumber = log.num
            currentRunLength = 1
        }

        if (currentRunLength >= 3 && !seenConsecutiveNumbers.has(log.num)) {
            seenConsecutiveNumbers.add(log.num)
            consecutiveNumbersResult.push(log.num)
        }
    }

    return consecutiveNumbersResult
}
