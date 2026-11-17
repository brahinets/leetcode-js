import { matrixOf } from '../../common/array-factories'

export { minimumChanges }

const INFINITE: number = Number.MAX_SAFE_INTEGER

function minimumChanges(s: string, substringCount: number): number {
    const length: number = s.length
    const substringCosts: number[][] = precomputeSubstringCosts(s)
    const dp: number[][] = matrixOf(INFINITE, substringCount + 1, length + 1)
    dp[0][0] = 0

    for (
        let substringsUsed: number = 1;
        substringsUsed <= substringCount;
        substringsUsed++
    ) {
        for (let end: number = 0; end <= length; end++) {
            let best: number = INFINITE
            for (let cut: number = 0; cut < end - 1; cut++) {
                const candidate: number =
                    dp[substringsUsed - 1][cut] + substringCosts[cut][end]
                if (candidate < best) {
                    best = candidate
                }
            }

            dp[substringsUsed][end] = best
        }
    }

    return dp[substringCount][length]
}

function precomputeSubstringCosts(s: string): number[][] {
    const length: number = s.length
    const costs: number[][] = matrixOf(INFINITE, length + 1, length + 1)

    for (let start: number = 0; start < length; start++) {
        for (let end: number = start + 2; end <= length; end++) {
            costs[start][end] = minSemipalindromicChanges(s, start, end)
        }
    }

    return costs
}

function minSemipalindromicChanges(
    s: string,
    start: number,
    end: number
): number {
    const length: number = end - start
    let best: number = INFINITE

    for (let divisor: number = 1; divisor < length; divisor++) {
        if (length % divisor !== 0) {
            continue
        }

        const changes: number = changesForDivisor(s, start, end, divisor)

        if (changes < best) {
            best = changes
        }
    }

    return best
}

function changesForDivisor(
    s: string,
    start: number,
    end: number,
    divisor: number
): number {
    const groupSize: number = (end - start) / divisor
    let changes: number = 0

    for (let row: number = 0; row < groupSize; row++) {
        const mirrorRow: number = groupSize - 1 - row

        if (row >= mirrorRow) {
            break
        }

        const rowOffset: number = row * divisor
        const mirrorOffset: number = mirrorRow * divisor

        for (let column: number = 0; column < divisor; column++) {
            const columnStart: number = start + column

            if (s[columnStart + rowOffset] !== s[columnStart + mirrorOffset]) {
                changes++
            }
        }
    }

    return changes
}
