export {findMinDifference}

function findMinDifference(timePoints: string[]): number {
    const timeInMinutes: number[] = timePoints.map((time: string): number => {
        const [hours, minutes]: string[] = time.split(':')
        return parseInt(hours) * 60 + parseInt(minutes)
    })

    timeInMinutes.sort((a: number, b: number): number => a - b)

    let minDifference: number = timeInMinutes[0] + 1440 - timeInMinutes[timeInMinutes.length - 1]
    for (let i: number = 1; i < timeInMinutes.length; i++) {
        minDifference = Math.min(minDifference, timeInMinutes[i] - timeInMinutes[i - 1])
    }

    return minDifference
}
