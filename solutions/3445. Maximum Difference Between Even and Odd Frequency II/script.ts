export {maxDifference}

const digits: string[] = ["0", "1", "2", "3", "4", "5"]

function maxDifference(s: string, k: number): number {
    let maxDiff: number = -Infinity

    for (const charA of digits) {
        for (const charB of digits) {
            if (charA === charB) {
                continue
            }

            const minDiffByStatus: number[] = [Infinity, Infinity, Infinity, Infinity]
            let countA: number = 0
            let countB: number = 0
            let prevCountA: number = 0
            let prevCountB: number = 0
            let left: number = -1

            for (let right: number = 0; right < s.length; right++) {
                if (s[right] === charA) {
                    countA++
                }

                if (s[right] === charB) {
                    countB++
                }

                while (right - left >= k && countB - prevCountB >= 2) {
                    const leftStatus: number = getParityStatus(prevCountA, prevCountB)

                    minDiffByStatus[leftStatus] = Math.min(minDiffByStatus[leftStatus], prevCountA - prevCountB)

                    left++

                    if (s[left] === charA) {
                        prevCountA++
                    }

                    if (s[left] === charB) {
                        prevCountB++
                    }
                }

                const rightStatus: number = getParityStatus(countA, countB)
                const flippedAStatus: number = rightStatus ^ 2
                if (minDiffByStatus[flippedAStatus] !== Infinity) {
                    maxDiff = Math.max(maxDiff, countA - countB - minDiffByStatus[flippedAStatus])
                }
            }
        }
    }

    return maxDiff
}

function getParityStatus(countA: number, countB: number): number {
    return ((countA & 1) << 1) | (countB & 1)
}
