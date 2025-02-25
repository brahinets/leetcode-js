export {maxCount}

function maxCount(banned: number[], n: number, maxSum: number): number {
    banned.sort((a: number, b: number): number => a - b)

    let bannedIdx: number = 0
    let count: number = 0

    for (let num: number = 1; num <= n && maxSum >= 0; num++) {
        if (bannedIdx < banned.length && banned[bannedIdx] === num) {
            while (bannedIdx < banned.length && banned[bannedIdx] === num) {
                bannedIdx++
            }
        } else {
            maxSum -= num
            if (maxSum >= 0) {
                count++
            }
        }
    }

    return count
}
