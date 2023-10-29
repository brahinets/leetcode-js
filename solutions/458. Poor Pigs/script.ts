export {poorPigs}

function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
    const attempts: number = Math.floor(minutesToTest / minutesToDie) + 1

    let pigs: number = 0
    while (Math.pow(attempts, pigs) < buckets) {
        pigs++
    }

    return pigs
}
