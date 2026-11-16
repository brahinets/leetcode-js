export { digitSum }

function digitSum(input: string, groupSize: number): string {
    let current: string = input

    while (current.length > groupSize) {
        let next: string = ''

        for (
            let start: number = 0;
            start < current.length;
            start += groupSize
        ) {
            next += String(sumDigitsInGroup(current, start, groupSize))
        }

        current = next
    }

    return current
}

function sumDigitsInGroup(
    source: string,
    start: number,
    groupSize: number
): number {
    const end: number = Math.min(start + groupSize, source.length)
    let sum: number = 0

    for (let index: number = start; index < end; index++) {
        sum += source.charCodeAt(index) - 48
    }

    return sum
}
