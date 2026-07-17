export { gcdValues }

import { arrayOfZeros } from '../../common/array-factories'

function gcdValues(nums: number[], queries: number[]): number[] {
    const maxNum: number = Math.max(...nums)
    const frequency: number[] = arrayOfZeros(maxNum + 1)

    for (const num of nums) {
        frequency[num]++
    }

    const gcdCount: number[] = arrayOfZeros(maxNum + 1)

    for (let g: number = maxNum; g >= 1; g--) {
        let pairCount: number = 0
        for (let multiple: number = g; multiple <= maxNum; multiple += g) {
            pairCount += frequency[multiple]
        }
        gcdCount[g] = Math.floor((pairCount * (pairCount - 1)) / 2)

        for (let multiple: number = 2 * g; multiple <= maxNum; multiple += g) {
            gcdCount[g] -= gcdCount[multiple]
        }
    }

    const cumulative: number[] = arrayOfZeros(maxNum + 1)
    for (let g: number = 1; g <= maxNum; g++) {
        cumulative[g] = cumulative[g - 1] + gcdCount[g]
    }

    const answer: number[] = []
    for (const query of queries) {
        let left: number = 1
        let right: number = maxNum
        let found: number = maxNum
        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2)
            if (cumulative[mid] <= query) {
                left = mid + 1
            } else {
                found = mid
                right = mid - 1
            }
        }
        answer.push(found)
    }

    return answer
}
