export {angleClock}

function angleClock(hour: number, minutes: number): number {
    const hourAngle: number = (hour % 12 + minutes / 60) * 30
    const minuteAngle: number = minutes * 6

    const angleDifference: number = Math.abs(hourAngle - minuteAngle)

    return Math.min(angleDifference, 360 - angleDifference)
}
