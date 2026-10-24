export { countDaysTogether }

const DAYS_IN_MONTH: readonly number[] = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]

function countDaysTogether(
    arriveAlice: string,
    leaveAlice: string,
    arriveBob: string,
    leaveBob: string
): number {
    const start: number = Math.max(
        toDayOfYear(arriveAlice),
        toDayOfYear(arriveBob)
    )
    const end: number = Math.min(toDayOfYear(leaveAlice), toDayOfYear(leaveBob))

    return Math.max(0, end - start + 1)
}

function toDayOfYear(date: string): number {
    const month: number = Number(date.slice(0, 2))

    let dayOfYear: number = Number(date.slice(3, 5))
    for (let monthIndex: number = 0; monthIndex < month - 1; monthIndex++) {
        dayOfYear += DAYS_IN_MONTH[monthIndex]
    }

    return dayOfYear
}
