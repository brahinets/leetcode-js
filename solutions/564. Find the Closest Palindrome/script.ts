export {nearestPalindromic}

function nearestPalindromic(n: string): string {
    const i: number = n.length % 2 === 0 ? (n.length / 2 - 1) : (n.length / 2)
    const half: number = Number(n.substring(0, i + 1))
    const candidates: number[] = getCandidates(half, n.length)

    let minDiff: number = Number.MAX_SAFE_INTEGER
    let result: number = 0
    const original: number = Number(n)
    for (let candidate of   candidates) {
        const diff: number = Math.abs(candidate - original)

        if (diff === 0) {
            continue
        }

        if (diff < minDiff) {
            minDiff = diff
            result = candidate
        } else if (diff === minDiff) {
            result = Math.min(Number(result), Number(candidate))
        }
    }

    return result.toString()
}

function getCandidates(scope: number, length: number): number[] {
    return [
        halfToPalindrome(scope, length % 2 === 0),
        halfToPalindrome(scope + 1, length % 2 === 0),
        halfToPalindrome(scope - 1, length % 2 === 0),
        10 ** (length - 1) - 1,
        10 ** (length) + 1,
    ]
}

function halfToPalindrome(half: number, isEven: boolean): number {
    let result: number = half

    if (!isEven) {
        half = Math.floor(half / 10)
    }

    while (half > 0) {
        result = result * 10 + half % 10
        half = Math.floor(half / 10)
    }

    return result
}
