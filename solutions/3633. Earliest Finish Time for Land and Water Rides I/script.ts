export { earliestFinishTime }

function earliestFinishTime(
    landStart: number[],
    landDuration: number[],
    waterStart: number[],
    waterDuration: number[],
): number {
    let result: number = Infinity

    for (let i: number = 0; i < landStart.length; i++) {
        const landEnd: number = landStart[i] + landDuration[i]

        for (let j: number = 0; j < waterStart.length; j++) {
            const waterEnd: number = waterStart[j] + waterDuration[j]

            result = Math.min(result, Math.max(landEnd, waterStart[j]) + waterDuration[j])
            result = Math.min(result, Math.max(waterEnd, landStart[i]) + landDuration[i])
        }
    }

    return result
}
