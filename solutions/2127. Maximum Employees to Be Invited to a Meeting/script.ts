import {arrayOfZeros} from "../../common/array-factories"

export {maximumInvitations}

function maximumInvitations(favorite: number[]): number {
    const inDegree: number[] = arrayOfZeros(favorite.length)
    for (let i: number = 0; i < favorite.length; i++) {
        inDegree[favorite[i]]++
    }

    const queue: number[] = []
    for (let i: number = 0; i < favorite.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }

    const longestChain: number[] = arrayOfZeros(favorite.length)
    while (queue.length > 0) {
        const current: number = queue.shift()!
        const favourite: number = favorite[current]
        longestChain[favourite] = Math.max(longestChain[favourite], longestChain[current] + 1)
        inDegree[favourite]--

        if (inDegree[favourite] === 0) {
            queue.push(favourite)
        }
    }

    let maxCycleSize: number = 0
    let totalChainSum: number = 0
    for (let i: number = 0; i < favorite.length; i++) {
        if (inDegree[i] > 0) {
            let cycleSize: number = 0
            let current: number = i
            do {
                inDegree[current] = 0
                current = favorite[current]
                cycleSize++
            } while (current !== i)

            maxCycleSize = Math.max(maxCycleSize, cycleSize)
        }
    }

    for (let i: number = 0; i < favorite.length; i++) {
        if (favorite[favorite[i]] === i && i < favorite[i]) {
            totalChainSum += longestChain[i] + longestChain[favorite[i]] + 2
        }
    }

    return Math.max(maxCycleSize, totalChainSum)
}
