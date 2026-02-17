export { readBinaryWatch }

function readBinaryWatch(turnedOn: number): string[] {
    const result: string[] = []

    for (let hour: number = 0; hour < 12; hour++) {
        for (let minute: number = 0; minute < 60; minute++) {
            if (countBits(hour) + countBits(minute) === turnedOn) {
                result.push(`${hour}:${minute.toString().padStart(2, '0')}`)
            }
        }
    }

    return result
}

function countBits(value: number): number {
    let count: number = 0
    let remaining: number = value

    while (remaining > 0) {
        count += remaining & 1
        remaining >>= 1
    }

    return count
}
