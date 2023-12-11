export {findKthPositive}

function findKthPositive(arr: number[], k: number): number {
    let missedCount: number = 0
    let guess: number = 1

    while (missedCount < k) {
        if (!arr.includes(guess)) {
            missedCount++
        }

        guess++
    }

    return guess - 1
}
