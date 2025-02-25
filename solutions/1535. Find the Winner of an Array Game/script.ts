export {getWinner}

function getWinner(arr: number[], k: number): number {
    let currentWinner: number = arr[0]
    let consecutiveWins: number = 0

    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] > currentWinner) {
            currentWinner = arr[i]
            consecutiveWins = 1
        } else {
            consecutiveWins++
        }

        if (consecutiveWins === k) {
            return currentWinner
        }
    }

    return currentWinner
}
