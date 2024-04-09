export {timeRequiredToBuy}

function timeRequiredToBuy(tickets: number[], k: number): number {
    let time: number = 0

    while (tickets[k] > 0) {
        for (let i: number = 0; i < tickets.length; i++) {
            if (tickets[i] > 0) {
                time++
                tickets[i]--
            }

            if (tickets[k] === 0) {
                break
            }
        }
    }


    return time
}
