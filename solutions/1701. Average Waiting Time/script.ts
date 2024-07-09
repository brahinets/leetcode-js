export {averageWaitingTime}

function averageWaitingTime(customers: number[][]): number {
    let totalWaitTime: number = 0

    let currentTime: number = 0
    for (const [arrivalTime, cookTime] of customers) {
        const finishTime: number = Math.max(currentTime, arrivalTime) + cookTime

        totalWaitTime += finishTime - arrivalTime
        currentTime = finishTime
    }

    return totalWaitTime / customers.length
}
