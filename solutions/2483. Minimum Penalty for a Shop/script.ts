export {bestClosingTime}

function bestClosingTime(customers: string): number {
    let penalty: number = 0
    let minPenalty: number = Infinity
    let bestHour: number = 0

    for (const customer of customers) {
        if (customer === "Y") {
            penalty++
        }
    }

    if (penalty < minPenalty) {
        minPenalty = penalty
        bestHour = 0
    }

    for (let j: number = 0; j < customers.length; j++) {
        if (customers[j] === "Y") {
            penalty--
        } else {
            penalty++
        }

        if (penalty < minPenalty) {
            minPenalty = penalty
            bestHour = j + 1
        }
    }

    return bestHour
}
