export {averageWaitingTime}

function averageWaitingTime(customers: number[][]): number {
    let totalWaitTime = 0

    let currentTime = 0
    for (const [arrivalTime, cookTime] of customers) {
        const finishTime = Math.max(currentTime, arrivalTime) + cookTime
        totalWaitTime += finishTime - arrivalTime
        currentTime = finishTime
    }

    return totalWaitTime / customers.length
}
