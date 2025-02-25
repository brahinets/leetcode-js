export {numTeams}

function numTeams(rating: number[]): number {
    let count: number = 0

    for (let i: number = 0; i < rating.length; i++) {
        let lessLeft: number = 0
        let greaterLeft: number = 0
        let lessRight: number = 0
        let greaterRight: number = 0

        for (let j: number = 0; j < i; j++) {
            if (rating[j] < rating[i]) {
                lessLeft++
            }
            if (rating[j] > rating[i]) {
                greaterLeft++
            }
        }

        for (let k: number = i + 1; k < rating.length; k++) {
            if (rating[k] < rating[i]) {
                lessRight++
            }
            if (rating[k] > rating[i]) {
                greaterRight++
            }
        }

        count += lessLeft * greaterRight + greaterLeft * lessRight
    }

    return count
}
