export {maxSatisfied}

function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let totalHappy: number = 0
    let extraHappy: number = 0
    let currentExtra: number = 0
    let thresholdStart: number = 0

    for (let minute = 0; minute < customers.length; minute++) {
        if (grumpy[minute] === 0) {
            totalHappy += customers[minute]
        } else {
            currentExtra += customers[minute]
        }

        const exceedCalmThreshold = minute - thresholdStart + 1 > minutes
        if (exceedCalmThreshold) {
            if (grumpy[thresholdStart] === 1) {
                currentExtra -= customers[thresholdStart]
            }
            thresholdStart++
        }

        extraHappy = Math.max(extraHappy, currentExtra)
    }

    return totalHappy + extraHappy
}
